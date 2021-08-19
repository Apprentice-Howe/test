import React from 'react';
import MyAntdTable from "../antdComponent/myAntdTable";
import MyAntdModal from "../antdComponent/myAntdModal";
import { Button, Popconfirm } from 'antd'
import axios from 'axios'

let serUrl = 'http://localhost:3001/'

const tableMenu = {
  display: 'flex',
  justifyContent: 'center'
}
const tableMenuBtn = {
  flex: 1,
  margin: '0 3px'
}

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalShow: false,
      userList: [],
      edit: true,
      cId: 0
    }
    this.columns = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: 'name',
        dataIndex: 'name',
      },
      {
        title: 'pass',
        dataIndex: 'pass',
      },
      {
        title: '操作',
        dataIndex: 'enumBtn',
        fixed: 'right',
        width: 120,
        render: (_, key) => <div style={ tableMenu }>
          <Button type='primary'
                  style={ tableMenuBtn }
                  onClick={ () => {
                    this.handleEdit(_,key)
                  } }>
            编辑
          </Button>
          <Popconfirm
            title="是否删除?"
            onConfirm={ () => {
              this.confirm(_, key)
            } }
            okText="确定"
            cancelText="取消"
          >
            <Button type='danger'
                    style={ tableMenuBtn }
                    onClick={ () => {
                      this.handleDelete(_,key)
                    } }>
              删除
            </Button>
          </Popconfirm>
        </div>
      },
    ];
  }

  confirm = (e, key) => {
    this.handleDelete(e, key)
    this.getData()
  }

  handleEdit = (e,key) => {
    this.setState({
      edit: true,
      modalShow: true,
      cId: key.id
    })
  }
  handleDelete = (e,key) => {
    axios.get(serUrl + 'delete', {
      params: {
        id: key.id
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  getData = () => {
    this.setState({
      userList: []
    })
    axios.get(serUrl + 'select').then(res => {
      res.data.forEach((val,index) => {
        this.setState({
          userList: [...this.state.userList, {
            key: index,
            id: val.id,
            name: val.name,
            pass: val.pass,
          }]
        })
      })
    })
  }


  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <MyAntdModal
          show={ this.state.modalShow }
          edit={ this.state.edit }
          cId={ this.state.cId }
          closeModal={ (e) => {
            this.setState({
              modalShow: e
            })
            console.log(this.state.modalShow)
          } }
          updateModal={ (e) => {
            this.getData()
            this.setState({
              edit: e
            })
          } }
        />
        <MyAntdTable
          columns={ this.columns }
          dataSource={ this.state.userList }/>
      </div>
    );
  }
};

