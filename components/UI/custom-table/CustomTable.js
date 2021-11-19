/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CustomButton from "../CustomButton";
import CustomTableStyle from "./CustomTable.module.scss";

const CustomTable = (props) => {
  return (
    <table className={CustomTableStyle["custom__table"]}>
      <thead>
        <tr>
          {Object.keys(props.columns).map((col, index) => (
            <th key={index}>
              {props.colTitle ? props.colTitle : props.columns[col]}
            </th>
          ))}

          {props.actions ? <th className="">Actions</th> : <></>}
        </tr>
      </thead>
      <tbody>
        {props.datas?.length > 0 ? (
          props.datas.map((data, dataIndex) => (
            <tr key={dataIndex}>
              {Object.keys(props.columns).map((col, index) => (
                <td key={index}>
                  {props.columns[col] != "" ? (
                    <span className={CustomTableStyle["span-table"]}>
                      {props.columns[col]}
                    </span>
                  ) : (
                    <></>
                  )}
                  {props[col] ? props[col](data[col]) : data[col]}
                </td>
              ))}
              {props.actions ? (
                <td key="actions" className={CustomTableStyle["actions-table"]}>
                  <span className={CustomTableStyle["span-table"]}>
                    Action{props.actions.length > 1 ? "s" : ""}
                  </span>
                  <div>
                    {props.actions.map((dataButton, indexButton) => (
                      <>
                        <CustomButton
                          key={indexButton}
                          onClick={() => dataButton.action(data.id)}
                        >
                          <FontAwesomeIcon icon={dataButton.icon} />
                        </CustomButton>
                      </>
                    ))}
                  </div>
                </td>
              ) : (
                <></>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={Object.keys(props.columns).length + 1}
              className={CustomTableStyle["no-data"]}
            >
              Pas de données disponible
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CustomTable;
