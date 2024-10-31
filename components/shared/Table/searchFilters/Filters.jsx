import { DownIcon, FilterIcon, SearchIcon } from "@/assets/images/auth/vector";
import React from "react";
import style from "./filter.module.scss";
const Filters = ({ options1, options2 }) => {
  return (
    <div className={style.container}>
      <div className={style.input}>
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>

      <div className={style.selects}>
        <div className={style.select__option}>
          <select>
            <option value={options1}>{options1}</option>
            <option value={options1}>{options1}</option>
          </select>
          <span>
            <DownIcon />
          </span>
        </div>

        <div className={style.select__option}>
          <select>
            <option value={options2}>{options2}</option>
            <option value={options2}>{options2}</option>
          </select>
          <span>
            <DownIcon />
          </span>
        </div>
        <button>
          <FilterIcon />
        </button>
      </div>
    </div>
  );
};

export default Filters;
