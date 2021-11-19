import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <>
        <li className={className} onClick={onClick}>
          {label}
        </li>

        <style jsx>{`
          @import "./../../styles/helpers/variables";

          .tab-list {
            &-item {
              display: inline-block;
              margin-bottom: -1px;
              background: 0 0;
              border: unset;
              border-bottom: 2px solid transparent;
              border-radius: 0;
              color: #7d879c;
              font-weight: 600;
              font-size: 16px;
              padding: 0.5rem 1rem;
              transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out;
              cursor: pointer;
            }

            &-active {
              background-color: #fff;
              color: $greenColor;
              border-color: $greenColor;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Tab;
