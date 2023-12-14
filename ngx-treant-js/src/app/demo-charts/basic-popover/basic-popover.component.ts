import {
    Component,
    OnInit,
    ViewEncapsulation,
    ViewChild,
    TemplateRef,
    AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DemoAppService } from '../demo-charts.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'ngx-treant-demo-basic-popover',
    templateUrl: './basic-popover.component.html',
    styleUrls: ['./basic-popover.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class BasicPopoverComponent implements AfterViewInit, OnInit {
    modalRef: BsModalRef;
    @ViewChild('template') modalTemplate: TemplateRef<any>;

    registerForm: FormGroup;

    basicPopoverId = 'basic-popover';
    basicPopoverClass = 'basic-popover-chart';

    basicPopoverData;

    displayChart = true;
    uploadable = false;

    private tree_name;
    private svc: DemoAppService;
    private node;
    private tree;
    private treant;
    private nodes;

    private content = `
           <div class="popover-content">
              <div class="btn-group mr-2" role="group">
                  <a type="button" class="btn btn-primary btn-sm" title="Add child node" id="add" href="#">أضف تلميذ</a>
              </div>
          </div>
      `;

    popoverSettings = {
        title: '<div class="popover-title"></div>',
        placement: 'top',
        content: this.content,
        container: 'body',
        html: true,
        selector: 'div',
        trigger: 'hover',
    };

    constructor(
        private route: ActivatedRoute,
        private modalService: BsModalService,
        private formBuilder: FormBuilder
    ) {
        this.svc = new DemoAppService();
    }

    ngAfterViewInit() {
        this.registerForm = this.formBuilder.group({
            title: [''],
            name: [''],
            contact: [''],
            image: [''],
        });
    }

    get f() {
        return this.registerForm.controls;
    }
    findNodeByTextName(textName){
        return this.basicPopoverData.find((n) => !!n.text && n.text.name == textName);
    }

    onSubmit() {
        //(window as any).tree.addNode({'id':this.node.id}, {'text':{'name':"TESTT"}});
        const node = this.nodes.find((n) => n.id == this.node.id);
        const hasChildren = !!node.children && !!node.children.length;
        let nodeChildren = hasChildren ? node.children.map(c => {
            let index = c;
            while(this.nodes[index].pseudo){
                index = this.nodes[index].children[0];
            }
            return this.findNodeByTextName(this.nodes[index].text.name)
            }) : [];
        const newStudent = {
            text: {
                name: this.registerForm.value.name || '',
            },
            id: 0,
            parentId: 0,
        };
        nodeChildren.push(newStudent);
        const dataNode = this.findNodeByTextName(this.node.text.name);
        if (dataNode) {
            dataNode['children'] = nodeChildren;
            this.basicPopoverData.push(newStudent);
        }

        this.modalRef.hide();

        this.displayChart = false;
        this.treant.destroy();

        setTimeout(() => {
            this.displayChart = true;
            this.uploadable = true;
        });

        console.log(this.registerForm.value);
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    ngOnInit(): void {
        this.tree_name = this.route.snapshot.paramMap.get('id');
        this.basicPopoverData = this.svc.getBasicPopoverData(this.tree_name);
        console.log("Starting with >\n"+ JSON.stringify(this.basicPopoverData));
    }

    onClick(obj): void {
        console.log('onClick: ', obj);
    }

    onUpdate(obj): void {
        console.log('onUpdate: ', obj);
    }

    onHover(event): void {
        if(event.node.nodeHTMLclass.trim().match(/^(?:rawi|)$/)){
            setTimeout(() => {
                event.$('.popover-title').text(event.node.text.name);
            }, 100);

            event
            .$('.popover')
            .off('click')
            .on('click', '#add', (e) => {
                this.node = event.node;
                event.$('.popover').popover('hide');
                this.registerForm.reset();
                this.openModal(this.modalTemplate);

                e.preventDefault();
                e.stopPropagation();
            });
        } else {
            event.$('.popover').popover('hide');
        }
    }

    onLoadTree(tree): void {
        this.tree = tree;
        console.log('tree: ', this.tree);
    }

    onLoadTreant(treant): void {
        this.treant = treant;
        console.log('treant: ', treant);
    }

    onLoadNodes(obj): void {
        this.nodes = obj.nodes;
        const $ = obj.$;

        setTimeout(() => {
            /*this.flatNodes = this.basicPopoverData;
            //this.flatNodes = this.svc.flattenItems(
                //    [this.basicPopoverData.nodeStructure],
                //    'children'
            //);
            this.flatNodes.forEach((n, i) => {
                this.flatNodes[i].id = i;
                const node = this.nodes.find((n) => n.id == i);
                this.flatNodes[i].parentId = node.parentId;
            });

            const unflattenNodes = this.flatNodes[0];
            unflattenNodes.children = this.svc.unflatten(this.flatNodes);

            this.basicPopoverData.nodeStructure = unflattenNodes;
            */
        });

        console.log('nodes: ', this.nodes);
    }

    upload(): void {
        var newNodes = this.basicPopoverData.filter(n => n.id == 0 && n.parentId == 0).sort((a,b) => a.parentId < b.parentId);
        // Assign new IDs
        var max_id = Math.max(...this.basicPopoverData.map(o => o.id || 0)) + 1;
        newNodes.forEach(function(n){
            n.id = max_id;
            max_id = max_id + 1;
        });
        // Search for parent ID, and cleanup parent
        var affectedParents = this.basicPopoverData.filter(n => n.children && n.children.some(c => c.parentId === 0));
        affectedParents.forEach(function(p){
            p.children.forEach(function(c){
                if(c.parentId === 0){
                    //this.basicPopoverData[c.id].parentId = p.id;
                    //delete c.parentId;
                }
            });
        });

        //Replace Child objects with IDs

        // Cleanup _json_id keys

        //Do upload to a new PR
        console.log("Uploading ..")
    }
}
