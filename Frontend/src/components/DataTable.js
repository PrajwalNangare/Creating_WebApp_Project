import React, {useState, useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {Text} from 'react-native';
import DeleteForm from "./deleteData";
import EditDialog from "./editData";
import AddDialog from "./addData";


const columns = [
    {field: "id", headerName: 'Sl No',width: 150, editable: false, cellClassName: 'super-app-theme--cell'},
    {field: 'businessCode', headerName: 'Business Code', width: 180, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'CustomerNumber', headerName: 'Customer Number', width: 250, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'clearDate', headerName: 'Clear Date', width: 180, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'businessYear', headerName: 'Business Year', width: 180, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'docID', headerName: 'Documnet ID', width: 180, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'postingDate', headerName: 'Posting Date', width: 180, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'documentcreateDate', headerName: 'Document Create Date', width: 250 , editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'dueinDate', headerName: 'Due In Date', width: 180, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'invoiceCurrency', headerName: 'Invoice Currency', width: 200, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'documentType', headerName: 'Document Type', width: 180, editable: false ,cellClassName: 'super-app-theme--cell'},
    {field: 'postingID', headerName: 'Posting ID', width: 180, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'totalopenAmount', headerName: 'Total Open Amount', width: 250, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'baselinecreateDate', headerName: 'Baseline Create Date', width: 250, editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'custpaymentTerms', headerName: 'Customer Payment Terms', width: 250 , editable: false,cellClassName: 'super-app-theme--cell'},
    {field: 'invoiceID', headerName: 'Invoice ID', width: 200, editable: false,cellClassName: 'super-app-theme--cell'}
]

// DataGrid loading
const DataTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        axios
          .get('http://localhost:8081/JDBC/ServletConnection')
          .then(res => {
              setTableData(res.data)
          })
          .catch(err => {
              console.log(err)
          })   
          
    })

    // Button Styling
     const useButtonStyles = makeStyles((theme) => ({
         root: {
            '& > *': {
              // margin: theme.spacing(0),
              position: "float",
              width: '200px',
              height:'35px',
              bottom:'30px',
              left:'980px',
              border: "1px solid #496fd6",
              '&:hover': {
                backgroundColor: '#119ACF',
            },
            },
          },
          btngrp: {
            '& > *':{
              position: "float",
              width: '200px',
              height:'35px',
              top:'5px',
              left:'20px',
              border: "1px solid #496fd6",
              borderRadius:'8px',
              backgroundColor:"transparent",
              '&:hover': {
                backgroundColor: '#119ACF',
            },
            },
          },
          refreshIcon: {
            '& > *': {
              position: "float",
              width: '20px',
              height:'35px',
              bottom:'50px',
              right:'150px',
              border: "1px solid #496fd6",
              borderRadius:'8px',
              backgroundColor:"transparent",
              '&:hover': {
                backgroundColor: '#119ACF',
            },
            },
          },
          searchField:{
            '& > *': {
              position: "relative",
              bottm:'15px',
              right:'0px',
              borderRadius:'8px',
              backgroundColor:"white",
            },
          },
      }));

      // Button Open and Close State
      const handleClickOpenn = () => {
          setOpenn(true);
        };
      const handleClosee = () => {
          setOpenn(false);
        };
      
      const handleClickOpen = () => {
          setOpen(true);
        };
      
      const handleClose = () => {
          setOpen(false);
        };

        // Delete button API
        const handleDelete = () => {
          let i=0;
          for(i=0;i<=selectRows;i++){
          axios
            .get(`http://localhost:8081/JDBC/DeleteData?slNo=${i}`)
            .then(res => {
                setOpenn(false)
            })
            .catch(err => {
                console.log(err)
            })}   
        };
        
        // Edit button API
        const handleEdit = () => {
          axios
            .get(`http://localhost:8081/JDBC/EditData?invcurrency=${invcur}&custpaymentTerms=${custpay}&slno=${selectRows}`)
            .then(res => {
                setOpen(false)
            })
            .catch(err => {
                console.log(err)
            })    
        };

      const handleChangeEdit = (e) => {
            setInv(e.target.value);
        };
      const handleChangeEdittwo = (e) => {
          setCustPay(e.target.value);
      };
      const handleAddOpen = () => {
        setAdd(true);
      };
      const handleAddClose = () => {
        setAdd(false);
      };
      
      const [selectRows, setSelectedRows]= React.useState([]);
      const [openn, setOpenn] = React.useState(false);
      const [open, setOpen] = React.useState(false);
      const Buttonclasses = useButtonStyles();
      const [invcur,setInv] = useState(null);
      const [custpay,setCustPay] = useState(null);
      const [pageSize, setPageSize] = React.useState(10);
      const [selectionModel, setSelectionModel] = React.useState([]);
      const [isAdd, setAdd] = React.useState(false);

    return (
    <><div className={Buttonclasses.root}>
        <Button color="primary" variant="outlined" onClick={handleAddOpen}><Text style={{ color: "white" }}>ADD</Text></Button>
        <Button color="primary" variant="outlined" disabled={!selectionModel.length} onClick={handleClickOpen}><Text style={{ color: "white" }}>EDIT</Text></Button>
        <Button color="primary" variant="outlined" disabled={!selectionModel.length} onClick={handleClickOpenn}><Text style={{ color: "white" }}>DELETE</Text></Button>
      </div><div style={{ height: 510, width: '100%', color: "white" }}>
          <DataGrid
            rows={tableData}
            columns={columns}
            checkboxSelection
            rowHeight={38}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 25, 100]}
            onSelectionModelChange={(selection) => {
              const selectionSet = new Set(selectRows);
              const result = selection.filter((s) => !selectionSet.has(s));
              // console.log(result);
              setSelectedRows(result);
              setSelectionModel(selection);
              setInv(tableData[0].invoiceCurrency);
              setCustPay(tableData[0].custpaymentTerms);
            } }
            selectionModel={selectionModel}
            pagination />
        </div><div>
          {/* Popup Here */}
          <DeleteForm openn={openn} handleClosee={handleClosee} handleDelete={handleDelete} />
          <EditDialog open={open} handleClose={handleClose} handleEdit={handleEdit}
            invcur={invcur} custpay={custpay} handleChangeEdit={handleChangeEdit} handleChangeEdittwo={handleChangeEdittwo} />
          <AddDialog isAdd={isAdd} handleAddClose={handleAddClose} />
        </div></>
    )   
}

export default DataTable 