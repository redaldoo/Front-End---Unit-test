import React, { Component } from "react";
import ProductList from "../../components/product-list/ProductList";
import ProductsStyle from "./Products.module.scss";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomSelect from "./../../components/UI/CustomSelect";

export default function Products() {
	let states = {
		defaultSelectText: "Please select an option",
		countryList: [
			{ id: 1, name: "Australia" },
			{ id: 2, name: "Brazil" },
			{ id: 3, name: "China" },
			{ id: 4, name: "Denmark" },
			{ id: 5, name: "Egypt" },
			{ id: 6, name: "Finland" },
			{ id: 7, name: "Ghana" },
			{ id: 8, name: "Hungary" },
			{ id: 9, name: "India" },
			{ id: 10, name: "Japan" },
		],
	};

	return (
		<>
			<div className={`container ${ProductsStyle["products-container"]}`}>
				<div className={ProductsStyle["products-sidebar"]}>
					<div
						className={`container-bg ${ProductsStyle["single-widget"]} ${ProductsStyle["category"]}`}
					>
						<h3 className={`${ProductsStyle["widget-title"]}`}>Catégories</h3>
						<ul className={ProductsStyle["category-list"]}>
							<li>
								<a href="#">
									Fashion <span>(50)</span>
								</a>
							</li>
							<li>
								<a href="#">
									Electronics <span>(15)</span>
								</a>
							</li>
							<li>
								<a href="#">
									Bikes <span>(25)</span>
								</a>
							</li>
							<li>
								<a href="#">
									Home &amp; Garden <span>(100)</span>
								</a>
							</li>
							<li>
								<a href="#">
									Gifts <span>(90)</span>
								</a>
							</li>
							<li>
								<a href="#">
									Health &amp; Beauty <span>(75)</span>
								</a>
							</li>
							<li>
								<a href="#">
									Accessories <span>(10)</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={ProductsStyle["products-main"]}>
					<div className={`container-bg container-bg-10 ${ProductsStyle["products-filter"]}`}>
						<div className={ProductsStyle["filter-left"]}>
							<div className={ProductsStyle["filter-single"]}>
								<span className="filter-title">Show :</span>
								<select>
									<option>10</option>
									<option>20</option>
									<option>30</option>
									<option>50</option>
									<option>100</option>
								</select>
								{/* <CustomSelect
                  defaultText={null}
                  optionsList={[
                    { id: 10, name: 10 },
                    { id: 20, name: 20 },
                    { id: 30, name: 30 },
                    { id: 50, name: 50 },
                    { id: 100, name: 100 },
                  ]}
                /> */}
							</div>
							<div className={ProductsStyle["filter-single"]}>
								<span className="my-auto filter-title">Sort By :</span>
								<select>
									<option>Latest</option>
									<option>Trending</option>
									<option>Popular</option>
									<option>Price Hight To Low</option>
									<option>Price Low To High</option>
								</select>
							</div>
						</div>
						<div className={ProductsStyle["filter-right"]}>
							<div className={ProductsStyle["filter-single"]}>
								<span>120 éléments</span>
							</div>
						</div>
					</div>
					<div className={ProductsStyle["products-list"]}>
						<ProductList></ProductList>
						{/* <Select /> */}
						{/* <Select /> */}
						{/* <CustomSelect
              defaultText={states.defaultSelectText}
              optionsList={states.countryList}
            /> */}
						{/* <CustomSelect
              defaultText={states.defaultSelectText}
              optionsList={states.countryList}
            /> */}
					</div>
					<div className={ProductsStyle["products-pagination"]}>
						<ul className={ProductsStyle["pagination-list"]}>
							<li className={ProductsStyle["disabled"]}>
								<a href="#">
									<FontAwesomeIcon icon={faArrowLeft} />
								</a>
							</li>
							<li className={ProductsStyle["active"]}>
								<a href="#">1</a>
							</li>
							<li className={ProductsStyle["disabled"]}>
								<a href="#">
									<FontAwesomeIcon icon={faArrowRight} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
