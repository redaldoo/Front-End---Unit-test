import React from "react";

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultKey: "null",
      defaultSelectText: "",
      showOptionList: false,
      optionsList: [],
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    if (this.props.showDefaultText) {
      this.setState({
        defaultSelectText: this.props.defaultText,
      });
    } else {
      console.log(this.props.optionsList);
      this.setState({
        defaultKey:
          this.props.optionsList && this.props.optionsList.length > 0
            ? this.props.optionsList[0].id
            : "",
        defaultSelectText:
          this.props.optionsList && this.props.optionsList.length > 0
            ? this.props.optionsList[0].name
            : "",
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (
      // !e.target.classList.contains("custom-select-option") &&
      // !e.target.classList.contains("selected-text")
      !e.target.classList.contains("select-options") &&
      !e.target.classList.contains("custom-select-container")
    ) {
      this.setState({
        showOptionList: false,
      });
    }
  };

  handleListDisplay = () => {
    this.setState((prevState) => {
      return {
        showOptionList: !prevState.showOptionList,
      };
    });
  };

  handleOptionClick = (e) => {
    this.setState({
      defaultKey: e.target.getAttribute("data-key"),
      defaultSelectText: e.target.getAttribute("data-name"),
      showOptionList: false,
    });
  };

  render() {
    const { optionsList } = this.props;
    const { defaultKey, showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-select-container">
        <div
          className={showOptionList ? "selected-text active" : "selected-text"}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <ul className="select-options">
            {optionsList.map((option) => {
              return (
                <li
                  className={`custom-select-option ${
                    defaultKey == option.id ? "option-selected" : ""
                  }`}
                  data-name={option.name}
                  data-key={option.id}
                  key={option.id}
                  onClick={this.handleOptionClick}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default CustomSelect;
