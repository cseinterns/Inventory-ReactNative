// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { DataTable, Searchbar } from "react-native-paper";
// import { Value } from "react-native-reanimated";
// import { View } from "react-native-web";
// import {db}  from '../Backend/config';
// const GetDoc = () => {
//     const [searchId,setId] = useState('')
//     const [searchProduct,setProduct] = useState('')
//     const [itemList,setitemList]=useState([])
//     useEffect(() => {

//         const GetItems =async()=>{
//             const data =await getDocs(collection(db,'Item'))
//             setitemList(data.docs.map((doc) => ({
//                 ...doc.data(),
//                 id:doc.id
//             })));

//         }
//         GetItems()

//     },[])
    
//     itemList.map((d) => {
//         return {
//             select:false,
//             id:d.id,
//             SKUID:d.SKUID,
//             productName:d.productName,
//             CIQ:d.CIQ,
//             NOQ:d.NOQ,
//             UOM:d.UOM
//             };
//     });
//     return ( 
// <View>
// <View><Searchbar
//      placeholder="Search By SKUID"
//      onChange={(event) =>{
//         setId(event.target.value);
//     }}
    
    
//     /></View>

// <View><Searchbar
//      placeholder="Search By ProductName"
//      onChangeText={onChangeSearch}
//      value={searchQuery}
    
//     /></View>



// <ScrollView>
// <DataTable style={{ border: "2px solid rgb(0, 0, 0)" }}>

// <DataTable.Header>
//   <DataTable.Title>Availability</DataTable.Title>
//   <DataTable.Title varchar>SKUID</DataTable.Title>
//   <DataTable.Title>Product Name</DataTable.Title>
//   <DataTable.Title>Unit of Measure</DataTable.Title>
//   <DataTable.Title numeric>Current Inventory Quantity</DataTable.Title>
//   <DataTable.Title numeric>New Order Quantity</DataTable.Title>
//   <DataTable.Title Button>Delete Item</DataTable.Title>
// </DataTable.Header>

//           {
//               itemList.filter((val) => {
//                 if(searchProduct === '' && searchId === '') {
//                     return val;
//                 } else if(val.productName.toLowerCase().includes(searchProduct.toLowerCase())) {
//                     return val;
//                 }
//             }).filter((val) => {
//                 if(val.skuid.toLowerCase().includes(searchId.toLowerCase())) {
//                     return val;
//                 }
//             })
//             .map((val,key) => {
//             // this.state.item.map((res, i) => {

//                 // .item.map((val,key) => {
//                     // return (

//                     //     // <DataTable.Cell>

//                     //     // </DataTable.Cell>
//                     //    <tbody>
//                     //        <tr key={key}>
//                     //             <td><input type="checkbox" onChange={(event) => {
//                     //                 let checked = event.target.checked;
//                     //                 setOrderList(orderList.map((data) => {
//                     //                     if(val.id === data.id){
//                     //                         data.select = checked;
//                     //                     }
//                     //                     return data;
//                     //                 }));
//                     //             }} checked={val.select}/></td>
//               return (

//                 <>
                    
//         <DataTable.Row>
//           <DataTable.Cell chechbox><CheckBox/></DataTable.Cell>
//           <DataTable.Cell>{val.SKUID}</DataTable.Cell>
//           <DataTable.Cell >{val.productName}</DataTable.Cell>
//           <DataTable.Cell>{val.UOM}</DataTable.Cell>
//           <DataTable.Cell><TextInput
//               keyboardType="numeric"
//               style={{
//                 fontWeight: "bold",
//                 borderColor: "Black",
//                 borderWidth: 1,
//                 padding: 10,
//                 width:"80%",
//                 marginLeft:10,
//               }}
//             /> </DataTable.Cell>
//           <DataTable.Cell numeric style={{justifyContent:"center"}}><TextInput
//               keyboardType="numeric"
//               style={{
//                 fontWeight: "bold",
//                 borderColor: "Black",
//                 borderWidth: 1,
//                 padding: 10,
//                 width:"80%",
//                 marginLeft:10,
//               }}
//             /> </DataTable.Cell>
//             <DataTable.Cell Button style={{justifyContent:"center"}}> <Button
//               color="black"
//               borderRadius="8"
//               borderWidth="1"
//               margin="10"
//               elevation="3"
//               title="  -  "
              
//             /></DataTable.Cell>
//         </DataTable.Row>

              


//                   </>
//               );
//             })
//           }
//               </DataTable>
              
//       </ScrollView>
//      </View>
//     );
//   }
  

// // </View>

// {/* {itemList.map((value)=>{
//     return(
// <View>
// <p>
//     {
//         value.productName
//     }
// </p>

// </View>
//     ); */}
// {/* })} */}
// // </View>


// //      );
// // }
 
// export default GetDoc;