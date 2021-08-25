// import { useState, useEffect } from "react";
// import "../../App.css";
// import Modal from "react-modal";
// import { Form } from "react-bootstrap";
// import { getPosts, addPost, deletePost, getUserId } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";

// const Dashboard = (props) => {
//   const [modal, setModal] = useState(false);
//   const fetchPosts = () => dispatch(getPosts());
//   const addPosts = (item) => dispatch(addPost(item));
//   const deletePosts = (item) => dispatch(deletePost(item));
//   const saveUser = (id) => dispatch(getUserId(id));
//   const { posts, postItem /*currentUser*/ } = useSelector(
//     (state) => state.postReducer
//   );

//   const dispatch = useDispatch();

//   const [currentItem, setCurrentItem] = useState({});

//   const customStyles = {
//     content: {
//       width: "30%",
//       height: "20%",
//       top: "20%",
//       left: "50%",
//       borderRadius: 10,
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//     },
//   };

//   useEffect(() => {
//     fetchPosts();
//     return () => {};
//   });
//   let getItem = (item) => {
//     setCurrentItem(item);

//     setModal(true);
//   };

//   let showAlert = (e) => {
//     alert(e.target.value);
//   };

//   let addItem = (item1) => {
//     addPosts(item1);
//     setModal(false);
//     saveUser(item1.title);
//     console.log(postItem);
//   };

//   let deleteItem = (item1) => {
//     deletePosts(item1);
//     setModal(false);
//     console.log(postItem);
//   };

//   const exists = (item1) => {
//     if (postItem.filter((item) => item.id === item1.id).length > 0) {
//       return true;
//     }
//     return false;
//   };

//   return (
//     <div
//       id="App"
//       style={{ display: "flex", flex: 1, justifyContent: "center" }}
//     >
//       <div>
//         <h3>Dashboard</h3>
//       </div>
//       <div style={{ flex: 1 }}>
//         <ul style={{ width: "100%", listStyleType: "none" }}>
//           <div>
//             {posts.map((data) => (
//               <div className="data">
//                 <li
//                   onClick={() => getItem(data)}
//                   style={{
//                     paddingLeft: 5,
//                     paddingTop: 5,
//                     flex: 1,
//                     textAlign: "center",
//                   }}
//                   key={data.id}
//                 >
//                   {" "}
//                   {data.title}
//                 </li>
//               </div>
//             ))}
//           </div>
//         </ul>
//       </div>

//       <div>
//         <Modal
//           ariaHideApp={false}
//           appElement={document.getElementById("App")}
//           style={customStyles}
//           isOpen={modal}
//         >
//           <div style={{}}>
//             <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
//               <label>{currentItem.title}</label>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flex: 1,
//                 justifyContent: "center",
//                 marginTop: 10,
//               }}
//             >
//               <button
//                 onClick={() =>
//                   exists(currentItem)
//                     ? deleteItem(currentItem)
//                     : addItem(currentItem)
//                 }
//                 type="submit"
//               >
//                 close modal
//               </button>
//             </div>

//             <Form>
//               <div
//                 style={{
//                   display: "flex",
//                   flex: 1,
//                   justifyContent: "center",
//                   marginTop: 10,
//                 }}
//               >
//                 <input
//                   onChange={(e) => showAlert(e)}
//                   style={{
//                     borderRadius: 10,
//                     overflow: "hidden",
//                     borderColor: "red",
//                     borderWidth: 0.8,
//                     padding: 5,
//                   }}
//                   type="text"
//                   placeholder="Enter ItemName"
//                 ></input>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flex: 1,
//                   justifyContent: "center",
//                   marginTop: 10,
//                 }}
//               >
//                 <input
//                   onChange={(e) => showAlert(e)}
//                   style={{
//                     borderRadius: 10,
//                     overflow: "hidden",
//                     borderColor: "red",
//                     borderWidth: 0.8,
//                     padding: 5,
//                   }}
//                   type="text"
//                   placeholder="Enter Itemtype"
//                 ></input>
//               </div>
//             </Form>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
