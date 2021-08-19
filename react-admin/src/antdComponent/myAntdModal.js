 // antd modal 封装
 import React, { useState } from 'react';
 import { Modal, Button, message } from 'antd';
 import MyAntdForm from "./myAntdForm";
 import axios from 'axios'

 const getUrl = 'http://localhost:3001/'

 export default function MyAntdModal (props) {
   let { show, closeModal, updateModal, edit } = props

   const [isModalVisible, setIsModalVisible] = useState(false);

   const showModal = () => {
     // setIsModalVisible(true);
     closeModal(true)
     updateModal(false)
   };

   const handleOk = () => {
     setIsModalVisible(false);
     closeModal(false)
   };

   const handleCancel = () => {
     setIsModalVisible(false);
     closeModal(false)
   };

   const insertData = (e) => {
     axios.get(getUrl + 'insert', {
       params: { ...e.user }
     }).then(res => {
       updateModal()
       message.info('新增成功');
     }).catch(err => {
       message.info(err);
     })
   }

   const del = () => {
     axios.get(getUrl + 'delete', {
       params: {
         id: props.cId
       }
     }).then(res => {
       console.log(res)
     }).catch(err => {
       console.log(err)
     })
   }

   const updateData = (e) => {
     del()
     axios.get(getUrl + 'insert', {
       params: { ...e.user }
     }).then(res => {
       updateModal()
       message.info('新增成功');
     }).catch(err => {
       message.info(err);
     })
   }

   const onSubmit = (e) => {
     if (!edit) {
       insertData(e)
     } else {
       updateData(e)
     }
     closeModal(false)
   }

   return (
     <>
       <Button type="primary" onClick={showModal}>
          新增
       </Button>
       <Modal title={ edit ? '编辑' : '新增' }
              keyboard
              visible={ isModalVisible || show }
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[]}>
         <MyAntdForm onSubmit={ onSubmit }/>
       </Modal>
     </>
   );
 };
