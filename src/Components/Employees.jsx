// import { useState } from "react";
import femaleProfile from "../images/muslim.jpg";
import maleProfile from "../images/man.png";

const Employees = ({
  employees,
  employeeCarsClick,
  teamSelectedChange,
  selectedTeam,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-2 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={teamSelectedChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={employeeCarsClick}
              >
                {employee.gender === "female" ? (
                  <img
                    src={femaleProfile}
                    alt="female png"
                    className="card-img-top"
                  />
                ) : (
                  <img
                    src={maleProfile}
                    alt="male png "
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b> {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
