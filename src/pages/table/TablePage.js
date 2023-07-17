import React, { useState } from "react";
import styled from "styled-components";
import Table from "../../components/table/Table";

const TablePage = () => {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  return (
    <Wrapper>
      <div className="input-fields">
        <input
          type="text"
          value={input1}
          onChange={(e) => setinput1(e.target.value)}
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setinput2(e.target.value)}
        />
      </div>
      <div className="table-container">
        <Table input1={input1} input2={input2} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export default TablePage;
