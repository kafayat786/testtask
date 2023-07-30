import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const TaskList = ({ tasks, setTasks, markAsCompleted, deleteTask }) => {
  const [selectgroup, setSelectGroup] = useState("");
  const filteredData = tasks?.filter((item) =>
    Object.values(item).some((field) =>
      String(field).toLowerCase().includes(selectgroup.toLowerCase())
    )
  );

  const actionTemplate = (rowData) => {
    return (
      <Button onClick={() => deleteTask(rowData)} className="custom-btn">
        Delete
      </Button>
    );
  };
  const markAsCompletedtemp = (rowData) => {
    return (
      <Button
        disabled={rowData?.completed}
        onClick={() => markAsCompleted(rowData)}
        className="custom-btn"
      >
        {rowData?.completed ? "Completed" : "InComplete"}
      </Button>
    );
  };

  return (
    <div className="pb-3">
      <Row className="my-3 px-3">
        {tasks?.length > 0 && (
          <>
            <h3>Select Group</h3>

            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setSelectGroup(e.target.value)}
            >
              <option value="">All</option>
              <option value="1">Group 1</option>
              <option value="2">Group 2</option>
              <option value="3">Group 3</option>
            </Form.Select>
          </>
        )}
      </Row>
      <DataTable
        dataKey="id"
        value={filteredData}
        className="tasktable mt-5"
        resizableColumns={true}
        reorderableColumns
        reorderableRows
        onRowReorder={(e) => setTasks(e.value)}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column rowReorder style={{ width: "3rem" }} />
        <Column field="title" header="Title"></Column>
        <Column field="group" header="Group"></Column>
        <Column field="description" header="Description"></Column>
        <Column header="Action" body={markAsCompletedtemp}></Column>
        <Column header="Action" body={actionTemplate}></Column>
      </DataTable>
    </div>
  );
};
export default TaskList;
