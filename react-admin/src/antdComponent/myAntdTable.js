// 对antd table 表格封装
import React from 'react'
import { Table } from 'antd';

let h = document.documentElement.clientHeight - 210

export default class MyAntdTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        {
          this.props.dataSource
            ? <Table rowSelection={rowSelection}
                     columns={ this.props.columns }
                     dataSource={ this.props.dataSource }
                     style={{ height: h + 'px' }}/>
            : ''
        }
      </div>
    );
  }
}
