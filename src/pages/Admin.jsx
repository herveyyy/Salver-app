
import  React from "react";
import DataTable from "../components/Table";

function Admin() {
    return (<div className="pt-7">
<DataTable />
<div className="mt-6 pt-3 flex flex-wrap mx-6 border-t justify-center">
<button 
onClick={window.print}
className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Print</span>
</button>
</div>
    </div>  );
}

export default Admin;