import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject, Filter, Sort, Group } from '@syncfusion/ej2-react-grids';
import { stringData } from '../datasource';
import { SampleBase } from '../sample-base';

export class KeyboardNavigation extends SampleBase {
    toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    editparams = { params: { popupHeight: '300px' } };
    validationRules = { required: true };
    orderidRules = { required: true, number: true };
    pageSettings = { pageCount: 5 };
    filterSettings = { type: 'Menu' };
    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <GridComponent dataSource={stringData} toolbar={this.toolbarOptions} allowPaging={true} allowFiltering={true} editSettings={this.editSettings} pageSettings={this.pageSettings} filterSettings={{ type: 'Menu' }} allowSorting={true} allowGrouping={true}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' validationRules={this.orderidRules} isPrimaryKey={true}></ColumnDirective>
              <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={this.validationRules}></ColumnDirective>
              <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
              <ColumnDirective field='OrderDate' headerText='Order Date' textAlign='Right' editType='datepickeredit' format='yMd' width='170'></ColumnDirective>
              <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={this.editparams}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Edit, Filter, Sort, Group]}/>
          </GridComponent>
        </div>
      </div>);
    }
}

export default KeyboardNavigation