import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject, Filter, Sort, Group } from '@syncfusion/ej2-react-grids';
import { SampleBase } from '../sample-base';
import { data } from '../datasource';



export class Grid extends SampleBase {
    toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    editparams = { params: { popupHeight: '300px' } };
    validationRules = { required: true };
    orderidRules = { required: false, number: true };
    pageSettings = { pageCount: 5, pageSize: 20};
    filterSettings = { type: 'Menu' };
    render() {
        return (
          <GridComponent dataSource={data} toolbar={this.toolbarOptions} allowPaging={true} allowFiltering={true} editSettings={this.editSettings} pageSettings={this.pageSettings} filterSettings={{ type: 'Menu' }} allowSorting={true} allowGrouping={true} height='100%' width='100%'>
            <ColumnsDirective>
            <ColumnDirective field='Contrat_N' headerText='Contrat N' width='120' textAlign='Right' validationRules={this.orderidRules} isPrimaryKey={true}/>
            <ColumnDirective field='Contrat_AO' headerText='Contrat AO' width='120' textAlign='Right' />
              <ColumnDirective field='Date_debut' headerText='Date Debut' textAlign='Right' editType='datepickeredit' format='yMd' width='170'/>
              <ColumnDirective field='Date_fin' headerText='Date Fin' textAlign='Right' editType='datepickeredit' format='yMd' width='170'/>
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Edit, Filter, Sort, Group]}/>
          </GridComponent>
       );
    }
}

export default Grid