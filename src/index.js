require("./style.css");
require("./fonts.css");
require("./icon.css");
require("svg-inline-loader?classPrefix!./ty.svg");

import React from "react";
import ReactDOM from "react-dom";
import Ripples from "react-ripples";
import PropTypes from "prop-types";

//Render Header
function Header() {
  return (
    <div className="header">
      <div>
        <i className="ty-icon ty-icon-bigbasket" />
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-quality" />Quality
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-ontime" />On time guarantee
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-free-delivery" />Free delivery
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-return" />Return policy
      </div>
    </div>
  );
}
ReactDOM.render(<Header />, document.getElementById("header"));
//Render Header

//SuccessIcon Animated
function SuccessIcon() {
  return (
    <div className="Thankyou">
      <div className="success-icon">
        <svg
          id="successAnimation"
          className="animated"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <path
            id="successAnimationResult"
            fill="#D8D8D8"
            d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
          />
          <circle
            id="successAnimationCircle"
            cx="35"
            cy="35"
            r="24"
            stroke="#979797"
            strokeWidth="2"
            strokeLinecap="round"
            fill="transparent"
          />
          <polyline
            id="successAnimationCheck"
            stroke="#979797"
            strokeWidth="2"
            points="23 34 34 43 47 27"
            fill="transparent"
          />
        </svg>
        <p className="text-primary txt-bold fadeIn">
          Yaay.. Your order is placed!
        </p>
      </div>
    </div>
  );
}
//SuccessIcon Animated

function Placeholder() {
  return (
    // <div className="content">
    //   <div className="pannel">
    <div className="timeline-wrapper">
      <div className="timeline-item">
        <div className="animated-background">
          <div className="background-masker header-top" />
          <div className="background-masker header-left" />
          <div className="background-masker header-right" />
          <div className="background-masker header-bottom" />
          <div className="background-masker subheader-left" />
          <div className="background-masker subheader-right" />
          <div className="background-masker subheader-bottom" />
          <div className="background-masker content-top" />
          <div className="background-masker content-first-end" />
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
function Placeholder1() {
  return <div className="animated-background1" />;
}

function CardPlaceholder() {
  return (
    <div className="timeline-item bg-card">
      <div className="animated-background bg-card">
        <div className="background-masker header-top" />
        <div className="background-masker header-left" />
        <div className="background-masker header-right" />
        <div className="background-masker header-bottom" />
        <div className="background-masker subheader-left" />
        <div className="background-masker subheader-right" />
        <div className="background-masker subheader-bottom" />
        <div className="background-masker content-top" />
        <div className="background-masker content-first-end" />
      </div>
    </div>
  );
}

function BtnLoader() {
  return (
    <div>
      <svg
        className="btn-loader"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(20 50)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="#fff"
            transform="scale(0.208629 0.208629)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.375s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(40 50)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="#fff"
            transform="scale(0.553248 0.553248)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(60 50)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="#fff"
            transform="scale(0.871897 0.871897)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.125s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(80 50)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="#fff"
            transform="scale(0.996297 0.996297)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}

//Component Refer&Earn
function Referandearn() {
  return (
    <div className="clearfix">
      <Ripples color="#dfdfdf">
        <button type="button" className="btn btn-default">
          Refer & earn
        </button>
      </Ripples>
    </div>
  );
}
//Component Refer&Earn

class FeedbackOrderExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      feedback: "",
      isFeedbackForm: false
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.handleFeedbackClose = this.handleFeedbackClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadio(e) {
    this.setState({ rating: e.target.value });
  }
  handleFeedback(e) {
    this.setState({ feedback: e.target.value });
  }
  handleFeedbackClose() {
    this.setState({ isFeedbackForm: false });
  }

  handleSubmit(e) {
    e.preventDefault();

    const feedbackData = {
      rating: this.state.rating,
      feedback: this.state.feedback
    };
    console.log("Send this in a POST request:", feedbackData);
  }

  render() {
    const rating = this.state.rating;
    debugger;
    const isFeedbackForm = false;
    const showFeedbackForm = rating > 1 || (rating <= 3 && isFeedbackForm);
    return (
      <div>
        <div className="stars">
          <form onSubmit={this.handleSubmit}>
            <div className="stars">
              <input
                className="star star-5"
                id="star-5"
                type="radio"
                name="star"
                value="5"
                onChange={this.handleRadio}
              />
              <label className="star star-5" htmlFor="star-5" />
              <input
                className="star star-4"
                id="star-4"
                type="radio"
                name="star"
                value="4"
                onChange={this.handleRadio}
              />
              <label className="star star-4" htmlFor="star-4" />
              <input
                className="star star-3"
                id="star-3"
                type="radio"
                name="star"
                value="3"
                onChange={this.handleRadio}
              />
              <label className="star star-3" htmlFor="star-3" />
              <input
                className="star star-2"
                id="star-2"
                type="radio"
                name="star"
                value="2"
                onChange={this.handleRadio}
              />
              <label className="star star-2" htmlFor="star-2" />
              <input
                className="star star-1"
                id="star-1"
                type="radio"
                name="star"
                value="1"
                onChange={this.handleRadio}
              />
              <label className="star star-1" htmlFor="star-1" />
            </div>
            <div>
              {showFeedbackForm && (
                <div className="feedback-form">
                  <textarea
                    className="form-control"
                    value={this.state.feedback}
                    name="feedback"
                    placeholder="Tell us what went wrong."
                    onChange={this.handleFeedback}
                  />
                  <div className="clearfix">
                    <Ripples className="btn-ripple fl-rt" color="#666">
                      <button type="submit" className="btn btn-secondary">
                        SUBMIT
                      </button>
                    </Ripples>
                    <Ripples className="btn-ripple fl-rt" color="#dfdfdf">
                      <button
                        type="button"
                        className="btn btn-default"
                        onClick={this.handleFeedbackClose}
                      >
                        NOT NOW
                      </button>
                    </Ripples>
                  </div>
                </div>
              )}

              {rating >= 4 && <Referandearn />}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

//Component Address
function MemberDetails(props) {
  return (
    <div className="pannel-item grid-container2 deliveryinfo">
      <div className="grid-item title">
        <i className="ty-icon ty-icon-location" />Delivery Address
      </div>
      <div className="grid-item address">
        {props.member_details.name}, {props.member_details.address}
      </div>
    </div>
  );
}
MemberDetails.propTypes = {
  member_details: PropTypes.object,
  address: PropTypes.string
};
//Component Address

//Component ShipmentSummary
function ShipmentSummary(props) {
  return (
    <Ripples color="#f2f2f2">
      <div className="pannel-item grid-container4 shipmentinfo">
        <div className="grid-item shipment fadeIn">
          <i
            className={
              "ty-icon " +
              (props.order.is_express == true
                ? "ty-icon-exp-del"
                : "ty-icon-std-delivery")
            }
          />
          Shipment 1: {props.order.order_type}
        </div>
        <div className="grid-item items">
          <div>{props.order.item_count}</div>
          <div>Item{props.order.item_count > 1 && "s"}</div>
        </div>
        <div className="grid-item slot">{props.order.slot_time}</div>
        <div className="grid-item price"> Rs {props.order.order_value}</div>
      </div>
    </Ripples>
  );
}
ShipmentSummary.propTypes = {
  order: PropTypes.object,
  is_express: PropTypes.bool,
  order_type: PropTypes.string,
  item_count: PropTypes.string,
  slot_time: PropTypes.string,
  order_value: PropTypes.string
};
//Component ShipmentSummary

//Component VoucherSummary
function VoucherSummary(props) {
  const voucerapplied = props.vouchersummary.is_voucher_applied;
  const showvoucher = voucerapplied ? (
    <div className="grid-item voucherinfo">
      <span className="text-primary">Voucher Applied</span>
      <div>{props.vouchersummary.voucher_msg}</div>
    </div>
  ) : (
    <div className="hide" />
  );
  return <div>{showvoucher}</div>;
}
VoucherSummary.propTypes = {
  vouchersummary: PropTypes.object,
  voucher_msg: PropTypes.string
};
//Component VoucherSummary

//Component Orderinfo
class PaymentSummary extends React.Component {
  constructor() {
    super();

    this.state = {
      hovering: false
    };
  }

  render() {
    var paymentclass = "";

    const handleMouseEnter = () => this.setState({ hovering: true });
    const handleMouseLeave = () => this.setState({ hovering: false });

    if (this.props.paymentsummary.payment_status === "Successfull") {
      paymentclass = "text-primary txt-bold";
    } else if (this.props.paymentsummary.payment_status === "Failed") {
      paymentclass = "text-danger txt-bold";
    } else {
      paymentclass = "text-light txt-bold";
    }

    return (
      <table id="t01">
        <tbody>
          <tr>
            <td>Payment Status : </td>
            <td className="pos-relative">
              <span className={paymentclass}>
                {this.props.paymentsummary.payment_status}
              </span>
              {this.props.paymentsummary.payment_status === "Failed" && (
                <i
                  className={
                    this.state.hovering
                      ? "ty-icon ty-icon-info-active-filled"
                      : "ty-icon ty-icon-info-red-lined"
                  }
                  onClick={handleMouseEnter}
                />
              )}
              {this.props.paymentsummary.payment_status === "Pending" && (
                <i
                  className={
                    this.state.hovering
                      ? "ty-icon ty-icon-info-orange-filled"
                      : "ty-icon ty-icon-info-orange-lined"
                  }
                  onClick={handleMouseEnter}
                />
              )}
              {this.state.hovering && (
                <div className="tooltip">
                  <span
                    className="ty-icon ty-icon-close"
                    onClick={handleMouseLeave}
                  />
                  Your online payment on bigbasket was not successful. You can
                  retry the payment again choosing pay now option. Meanwhile,
                  please do not worry, your order has been converted to cash on
                  delivery
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td>Order Amount :</td>
            <td className="txt-bold text-left">
              Rs {this.props.paymentsummary.order_amount}
            </td>
          </tr>
          <tr>
            <td>You Saved :</td>
            <td className="text-primary text-left">
              Rs {this.props.paymentsummary.total_savings}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
PaymentSummary.propTypes = {
  paymentsummary: PropTypes.object,
  payment_status: PropTypes.string,
  order_ammount: PropTypes.string,
  total_savings: PropTypes.string
};
//Component Orderinfo

//OrderActions section
class OrderActions extends React.Component {
  constructor() {
    super();
    this.handlePaynowClick = this.handlePaynowClick.bind(this);
    this.handleVoucherClick = this.handleVoucherClick.bind(this);
    this.handleShopmoreClick = this.handleShopmoreClick.bind(this);
    this.handleSupportClick = this.handleSupportClick.bind(this);
    this.state = { isLoaded: false };
  }

  handlePaynowClick() {
    alert("clicked Paynow");
  }

  handleVoucherClick() {
    alert("clicked Voucher");
  }

  handleShopmoreClick() {
    alert("clicked Shop more");
  }

  handleSupportClick() {
    alert("clicked Support");
  }
  render() {
    const ispaynow =
      this.props.orderactions.payment_status === "Pay On Delivery" ||
      this.props.orderactions.payment_status === "Failed";
    return (
      <div className="grid-container3 order-actions">
        {ispaynow && (
          <div
            className="grid-item card hvr-float-shadow"
            onClick={this.handlePaynowClick}
          >
            <div className="text-blue txt-bold text-medium">
              <i className="ty-icon ty-icon-voucher" />PAY NOW
            </div>
            <p className="text-meduim txt-bold">Pay online for this order</p>
            <p className="text-light">
              Complete order payment for cash-free delivery
            </p>
          </div>
        )}

        {!this.props.orderactions.is_voucher_applied && (
          <div
            className="grid-item card hvr-float-shadow"
            onClick={this.handleVoucherClick}
          >
            <div className="text-blue txt-bold text-medium">
              <i className="ty-icon ty-icon-add-item" />FORGOT VOUCHER?
            </div>
            <p className="text-meduim txt-bold">
              Add more items to your order{" "}
            </p>
            <p className="text-light">
              Same time delivery with no extra delivery charges!
            </p>
          </div>
        )}

        {this.props.orderactions.shop_more && (
          <div
            className="grid-item card hvr-float-shadow"
            onClick={this.handleShopmoreClick}
          >
            <div className="text-blue txt-bold text-medium">
              <i className="ty-icon ty-icon-add-item" />FORGOT ITEM?
            </div>
            <p className="text-meduim txt-bold">
              Add more items to your order{" "}
            </p>
            <p className="text-light">
              Same time delivery with no extra delivery charges!
            </p>
          </div>
        )}
        <div
          className="grid-item card hvr-float-shadow"
          onClick={this.handleSupportClick}
        >
          <div className="text-blue txt-bold text-medium">
            <i className="ty-icon ty-icon-help" />HELP
          </div>
          <p className="text-meduim txt-bold">Need more assistance?</p>
          <p className="text-light">Let us help you for all your queries!</p>
        </div>
      </div>
    );
  }
}
OrderActions.propTypes = {
  orderactions: PropTypes.object,
  shop_more: PropTypes.bool,
  is_voucher_applied: PropTypes.bool
};
//OrderActions section

//Component OrderPlacedWidget
class OrderPlacedWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      member_details: {},
      orders: [],
      orderDetails: {},
      voucherSummary: {},
      paymentSummary: {},
      orderActions: {}
    };
  }

  componentDidMount() {
    return fetch("http://localhost:3004/db")
      .then(response => response.json())
      .then(response => {
        setTimeout(
          function() {
            this.setState(
              {
                isLoading: false,
                member_details: response.member_details,
                orders: response.orders,
                orderDetails: response.order_details,
                customer_support: response.customer_support,
                voucherSummary: response.order_details,
                paymentSummary: response.order_details,
                orderActions: response.order_details
              },
              function() {}
            );
          }.bind(this),
          3000
        );
      });
  }

  render() {
    let orders = this.state.orders;
    let member_details = this.state.member_details;
    const loader = this.state.isLoading;
    let vouchersummary = this.state.voucherSummary;
    let paymentsummary = this.state.paymentSummary;
    let orderactions = this.state.orderActions;

    return (
      <div className="content">
        <div className="feedback-order-experience">
          <SuccessIcon />
          <FeedbackOrderExperience
            emptySymbol={
              <img className="star" alt="star" src={require("./star-o.svg")} />
            }
            fullSymbol={
              <img className="star" alt="star" src={require("./star.svg")} />
            }
            fractions={2}
          />
        </div>
        <div className="pannel">
          {loader ? (
            <Placeholder />
          ) : (
            <MemberDetails member_details={member_details} />
          )}

          {loader ? (
            <div>
              <div className="mar-top-15" />
              <Placeholder />
              <div className="mar-top-5" />
              <Placeholder />
            </div>
          ) : (
            orders.map(order => (
              <ShipmentSummary key={order.order_id} order={order} />
            ))
          )}

          <div className="grid-container2 orderinfo">
            {loader ? (
              <div>
                <Placeholder1 />
                <Placeholder1 />
              </div>
            ) : (
              <VoucherSummary vouchersummary={vouchersummary} />
            )}
            {loader ? (
              <div>
                <Placeholder1 />
                <Placeholder1 />
                <Placeholder1 />
              </div>
            ) : (
              <div className="grid-item paymentinfo">
                <PaymentSummary paymentsummary={paymentsummary} />
              </div>
            )}
          </div>
        </div>
        <div className="assistance">
          {loader ? (
            <div className="grid-container3">
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
            </div>
          ) : (
            <OrderActions orderactions={orderactions} />
          )}
        </div>
        <div className="btn btn-primary btn-lg">
          {loader && <BtnLoader />}
          <span>CONTINUE SHOPPING</span>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<OrderPlacedWidget />, document.getElementById("root"));
//Component OrderPlacedWidget

// Render Footer
function Footer() {
  return (
    <div className="footer">
      <p className="text-center">
        For Further enquiries: Call: 1860123100 | E-mail:
        customerservice@bigbasket.com
      </p>
    </div>
  );
}
ReactDOM.render(<Footer />, document.getElementById("footer"));
// Render Footer
