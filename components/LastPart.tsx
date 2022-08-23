import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function LastPart() {
  return (
    <div style={{ width: "100%", margin: "10px",padding:'30px' }}>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
          borderRadius: "15px",
        }}
      >
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929", fontSize: "18px" }}>Orders</li>
          <li
            style={{
              color: "#ABABAB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            <select style={{backgroundColor:'#ECECEC',color:'#292929',boxShadow:'0px 0px 5px rgba(40, 86, 120, 0.1)',borderRadius:'5px',width:'100px',height:'29px'}} name="cars" id="cars">
              <option value="volvo">Recent</option>
              <option value="saab">Demo1</option>
              <option value="opel">Demo2</option>
              <option value="audi">Demo3</option>
            </select>
          </li>
        </ul>
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}># Name</li>
          <li style={{ color: "#292929" }}>Email</li>
          <li style={{ color: "#292929" }}>Status</li>
          <li style={{ color: "#292929" }}>Status</li>
          <li style={{ color: "#292929" }}>Status</li>
          <li style={{ color: "#292929" }}>Status</li>
        </ul>
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}>1 John Doe</li>
          <li style={{ color: "#292929" }}>John@abc.com</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
        </ul>
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}>2 Maraih </li>
          <li style={{ color: "#292929" }}>Mari@ab.com</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
        </ul>
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}>3 John Doe</li>
          <li style={{ color: "#292929" }}>John@abc.com</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
          <li style={{ color: "#04AF00" }}>Verified</li>
        </ul>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}>4 Maraih </li>
          <li style={{ color: "#292929" }}>Mari@ab.com</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
          <li style={{ color: "#FF0303" }}>Unverified</li>
        </ul>
      </div>
    </div>
  );
}

export default LastPart;
