import React from 'react';
import '../css/register.css';

export default props => {
    return (
        <div className="container">
            <div>
                <div className="Product_Button col-lg-offset-6">
                    <a href="#" className="btn btn-primary"><i className=""></i><strong>MANAGE VARIANTS</strong></a>
                    <a href="#" className="btn btn-primary"><i className=""></i><strong>CLOSE</strong></a>
                    <a href="#" className="btn btn-primary"><i className=""></i><strong>SAVE AND CLOSE</strong></a>
                    <a href="#" className="btn btn-primary"><i className=""></i><strong>SAVE</strong></a>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div><ul className="nav nav-tabs col-lg-12" role="tablist">
                    <li className="active"><a href="#Product_main" role="tab" data-toggle="tab">Main</a></li>
                    <li className=""><a href="#Product_Images" role="tab" data-toggle="tab">Images</a></li>
                    <li className=""><a href="#Product_Summary" role="tab" data-toggle="tab">Summary</a></li>
                    <li className=""><a href="#Product_Desc" role="tab" data-toggle="tab">Description</a></li>
                    <li className=""><a href="#Product_Mappings" role="tab" data-toggle="tab">Mappings</a></li>
                    <li className=""><a href="#Product_StoreMapping" role="tab" data-toggle="tab">Store Mapping</a></li>
                    <li className=""><a href="#Product_Options" role="tab" data-toggle="tab">Options</a></li>
                </ul></div>
                <div className="clearfix"></div>
                <div className="Product_Content tab-content">
                    <div id="Product_main" className="tab-pane active">
                        <form className="form-horizontal" action='' method="POST" />
                        <fieldset>
                            <div className="col-lg-12 form-group margin50">
                                <label className="col-lg-2" for="Name">Name</label>
                                <div className="col-lg-4">
                                    <input type="text" id="name" name="Name" placeholder="" className="form-control name" />
                                </div>
                            </div>

                            <div className=" col-lg-12 form-group">
                                <label className="col-lg-2" for="ProductType">Product Type</label>
                                <div className="col-lg-4">
                                    <select id="productType" name="ProductType" className="form-control product-type">
                                        <option value="0">-Select-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Manufacturer">Manufacturer</label>
                                <div className="col-lg-4">
                                    <select id="manufacturer" name="Manufacturer" className="form-control manufacturer">
                                        <option value="0">-Select-</option>
                                    </select>
                                    <p className="help-block"><a>Manufacturer Quick Add</a></p>
                                </div>
                            </div>

                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Distributor">Distributor</label>
                                <div className="col-lg-4">
                                    <select id="distributor" name="Distributor" className="form-control distributor">
                                        <option value="0">-Select-</option>
                                    </select>
                                    <p className="help-block"><a>Distributor Quick Add</a></p>
                                </div>
                            </div>


                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="SKU">SKU</label>
                                <div className="col-lg-4">
                                    <input type="text" id="sku" name="SKU" placeholder="" className="form-control sku" />
                                </div>
                            </div>

                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="ManufacturerPart">Manufacturer Part</label>
                                <div className="col-lg-4">
                                    <input type="text" id="manufacturerPart" name="ManufacturerPart" placeholder="" className="form-control manufacturer-part" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Published">Published</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="Published" className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="Published" checked className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Featured">Featured</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="Featured" className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="Featured" checked className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="PageDisplay">Page Display</label>
                                <div className="col-lg-4">
                                    <select id="pageDisplay" name="PageDisplay" className="form-control page-display">
                                        <option value="0">-Select-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="ColumnWidth">Column Width</label>
                                <div className="col-lg-4">
                                    <input type="text" id="columnWidth" name="ColumnWidth" placeholder="" className="form-control column-width" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="TaxclassName">Tax className</label>
                                <div className="col-lg-4">
                                    <select id="taxclassName" name="TaxclassName" className="form-control tax-className">
                                        <option value="0">-Select-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="QuantityDiscountTable">Quantity Discount Table</label>
                                <div className="col-lg-4">
                                    <select id="quantityDiscount" name="QuantityDiscountTable" className="form-control quantity-discount">
                                        <option value="0">-Select-</option>
                                    </select>
                                    <p className="help-block"><a>Quantity Discount Quick Add</a></p>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="ShowBuyButton">Show Buy Button</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="ShowBuyButton" className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="ShowBuyButton" checked className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="RequiresRegistrationToView">Requires Registration To View</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="RequiresRegistrationToView" checked className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="RequiresRegistrationToView" className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="CallToOrder">Is Call To Order</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="CallToOrder" checked className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="CallToOrder" className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="HidePriceUntilCart">Hide Price Until Cart</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="HidePriceUntilCart" checked className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="HidePriceUntilCart" className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="ProductFeeds">Exclude From Product Feeds</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="ProductFeeds" checked className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="ProductFeeds" className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Kit">Is a Kit</label>
                                <div className="col-lg-2">
                                    <input type="radio" name="Kit" checked className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="Kit" className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Inventory">Track Inventory By Size and Color</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="Inventory" checked className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="Inventory" className="input-xlarge" /><span>Yes</span>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="ColorOptionPrompt">Color Option Prompt</label>
                                <div className="col-lg-4">
                                    <input type="text" id="colorOptionPrompt" name="ColorOptionPrompt" placeholder="" className="form-control color-option-prompt" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="SizeOptionPrompt">Size Option Prompt</label>
                                <div className="col-lg-4">
                                    <input type="text" id="sizeOptionPrompt" name="SizeOptionPrompt" placeholder="" className="form-control size-option-prompt" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="RequiresTextField">Requires Text Field</label>
                                <div className="col-lg-4">
                                    <input type="radio" name="RequiresTextField" checked className="input-xlarge" /><span>No</span>
                                    <input type="radio" name="RequiresTextField" className="input-xlarge" /><span>Yes</span>
                                    <p className="help-block">
                                        <span>Field Prompt </span>
                                        <input type="text" id="fieldPrompt" name="FieldPrompt" placeholder="" className="form-control field-prompt" />
                                    </p>
                                    <p className="help-block">
                                        <span>Max Length </span>
                                        <input type="text" id="maxLength" name="MaxLength" placeholder="" className="form-control max-length" />
                                    </p>
                                </div>
                            </div>

                            <h3>Default Variant Information</h3>

                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Price">Price</label>
                                <div className="col-lg-4">
                                    <input type="text" id="price" name="Price" placeholder="" className="form-control price" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="SalePrice">Sale Price</label>
                                <div className="col-lg-4">
                                    <input type="text" id="saleprice" name="SalePrice" placeholder="" className="form-control sale-price" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Weight">Weight</label>
                                <div className="col-lg-4">
                                    <input type="text" id="weight" name="Weight" placeholder="" className="form-control weight" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Dimentions">Dimentions(Width x Height X Depth)</label>
                                <div className="col-lg-10">
                                    <div className="col-lg-3"><input type="text" id="dimentionsWidth" name="DimentionsWidth" placeholder="" className="form-control dimentions-width" />  X</div>
                                    <div className="col-lg-3"><input type="text" id="dimentionsHeight" name="DimentionsHeight" placeholder="" className="form-control dimentions-height" />  X</div>
                                    <div className="col-lg-3"><input type="text" id="dimentionsDepth" name="DimentionsDepth" placeholder="" className="form-control dimentions-depth" /></div>
                                </div>
                            </div>

                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="CurrentInventory">Current Inventory</label>
                                <div className="col-lg-4">
                                    <input type="text" id="currentInventory" name="CurrentInventory" placeholder="" className="form-control current-inventory" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Colors">Colors</label>
                                <div className="col-lg-4">
                                    <input type="text" id="colors" name="Colors" placeholder="" className="form-control colors" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="ColorSKUModifier">Color SKU Modifiers</label>
                                <div className="col-lg-4">
                                    <input type="text" id="colorModifier" name="ColorSKUModifier" placeholder="" className="form-control color-modifier" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="Sizes">Sizes</label>
                                <div className="col-lg-4">
                                    <input type="text" id="sizes" name="Sizes" placeholder="" className="form-control sizes" />
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <label className="col-lg-2" for="SizeSKUModifier">Size SKU Modifiers</label>
                                <div className="col-lg-4">
                                    <input type="text" id="sizeModifier" name="SizeSKUModifier" placeholder="" className="form-control size-modifier" />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div id="Product_Images" className="tab-pane"><div className="col-lg-12 form-group margin50">
                    <label className="col-sm-2" for="FilenameOverride">Image Filename Override</label>
                    <div className="col-sm-4">
                        <input className="form-control" type="text" id="filenameOverride" placeholder="" />
                    </div>
                </div>
                    <div className="col-lg-12 form-group">
                        <label className="col-sm-2" for="exampleInputFile">Small</label>
                        <div className="col-sm-4">
                            <input type="file" id="small" />
                        </div>
                    </div>

                    <div className="col-lg-12 form-group">
                        <label className="col-sm-2" for="exampleInputFile">Medium</label>
                        <div className="col-sm-4">
                            <input type="file" id="medium" />
                        </div>
                    </div>

                    <div className="col-lg-12 form-group">
                        <label className="col-sm-2" for="exampleInputFile">Large</label>
                        <div className="col-sm-4">
                            <input type="file" id="large" />
                        </div>
                    </div>


                </div>
                <div id="Product_Summary" className="tab-pane">
                    <div className="col-lg-12 form-group margin50">
                        <label className="col-sm-2" for="Summary">Summary</label>
                        <div className="col-sm-4">
                            <textarea className="form-control summary" id="summary" name="Summary"></textarea>
                        </div>
                    </div></div>
                <div id="Product_Desc" className="tab-pane">
                    <div className="col-lg-12 form-group margin50">
                        <label className="col-sm-2" for="Description">Description</label>
                        <div className="col-sm-4">
                            <textarea className="form-control description" id="description" name="Description"></textarea>
                        </div>
                    </div></div>
                <div id="Product_Mappings" className="tab-pane"><h4>Mappings</h4></div>
                <div id="Product_StoreMapping" className="tab-pane">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Store</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="col-sm-10">
                                <label>
                                    <input type="checkbox" className="retail" />Retail
                    </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="col-sm-10">
                                <label>
                                    <input type="checkbox" className="professional" />Professionals
                    </label>
                            </div>
                        </div>
                    </div></div>
                <div id="Product_Options" className="tab-pane">  <div className="col-lg-12 form-group margin50">
                    <div className="col-lg-6">
                        <label className="col-sm-4" for="RelatedProducts">Related Products</label>
                        <div className="col-sm-8">
                            <input className="form-control related-products" type="text" id="relatedProducts" name="RelatedProducts" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container">
                            <button type="button" className="btn productbtn collapsed width450" data-toggle="collapse" data-target="#related">Related Products Helper</button>
                            <div id="related" className="collapse">
                                Related Products Information
  </div>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-12 form-group">
                        <div className="col-lg-6">
                            <label className="col-sm-4" for="UpsellProducts">Upsell Products</label>
                            <div className="col-sm-8">
                                <input className="form-control upsell-products" type="text" id="upsellProducts" name="UpsellProducts" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="container">
                                <button type="button" className="btn productbtn collapsed width450" data-toggle="collapse" data-target="#upsell">Upsell Products Helper</button>
                                <div id="upsell" className="collapse">
                                    Upsell Products Information
  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 form-group">
                        <div className="col-lg-6">
                            <label className="col-sm-4" for="RequiredProducts">Required Products</label>
                            <div className="col-sm-8">
                                <input className="form-control required-products" type="text" id="requiredProducts" name="RequiredProducts" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="container">
                                <button type="button" className="btn productbtn collapsed width450" data-toggle="collapse" data-target="#required">Required Products Helper</button>
                                <div id="required" className="collapse">
                                    Required Products Information
  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 form-group">
                        <div className="col-lg-6">
                            <label className="col-sm-4" for="UpsellProductDiscount">Upsell Product Discount Percent</label>
                            <div className="col-sm-8">
                                <input className="form-control upsell-product-discount" type="text" id="upsellProductDiscount" name="UpsellProductDiscount" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 form-group">
                        <div className="col-lg-6">
                            <label className="col-sm-4" for="SalePrompt">'On Sale' Prompt</label>
                            <div className="col-sm-8">
                                <select className="form-control sale-prompt">

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="Product_Button col-lg-offset-6">
                <a href="#" className="btn btn-primary"><i className=""></i><strong>MANAGE VARIANTS</strong></a>
                <a href="#" className="btn btn-primary"><i className=""></i><strong>CLOSE</strong></a>
                <a href="#" className="btn btn-primary"><i className=""></i><strong>SAVE AND CLOSE</strong></a>
                <a href="#" className="btn btn-primary"><i className=""></i><strong>SAVE</strong></a>
            </div>
        </div>
    );
};