import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
  }

  render() {
    const products = this.state.products.map(function (product, idx) {
      return <ProductListItem key={idx} product={product} />;
    });
    return (
      <div className="product-list group">
        <h3>All Products</h3>
        {products}
      </div>
    );
  }
}
