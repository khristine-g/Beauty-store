import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { SiPaypal } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md'; // For MPesa, you can use a phone icon or custom image

import '../Checkout.css';

const Checkout = ({ cart, onPlaceOrder }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    county: '',
    town: '',
    zipCode: '',
    phoneNumber: '',
  });
  const [towns, setTowns] = useState([]); // State to store towns based on selected county
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Rendering Checkout component');
    console.log('Cart:', cart);
  }, [cart]);

  useEffect(() => {
    console.log('UserInfo:', userInfo);
  }, [userInfo]);

  // Mapping of counties to major towns
  const countiesAndTowns = {
    "Bomet": ["Bomet Town", "Kaptum", "Kembu", "Longisa"],
    "Bungoma": ["Bungoma Town", "Chwele", "Webuye", "Kimilili"],
    "Busia": ["Busia Town", "Malaba", "Nambale", "Buniyala"],
    "Elgeyo-Marakwet": ["Iten", "Kapkitony", "Kamariny", "Keiyo"],
    "Embu": ["Embu Town", "Runyenjes", "Manyatta", "Mbeere"],
    "Garissa": ["Garissa Town", "Modogashe", "Bura", "Iftin"],
    "Homa Bay": ["Homa Bay Town", "Kendu Bay", "Rachuonyo", "Mbita"],
    "Isiolo": ["Isiolo Town", "Garbatula", "Merti", "Oldonyiro"],
    "Kajiado": ["Kajiado Town", "Ngong", "Loitokitok", "Magadi"],
    "Kakamega": ["Kakamega Town", "Lurambi", "Shinyalu", "Navakholo"],
    "Kericho": ["Kericho Town", "Sotik", "Kapsoit", "Kiprugut"],
    "Kiambu": ["Kiambu Town", "Thika", "Ruiru", "Kimbo"],
    "Kilifi": ["Kilifi Town", "Malindi", "Gede", "Mtwapa"],
    "Kirinyaga": ["Kerugoya", "Kutus", "Kianyaga", "Mwea"],
    "Kisii": ["Kisii Town", "Kisii County", "Nyamira", "Nyamache"],
    "Kisumu": ["Kisumu Town", "Ahero", "Muhoroni", "Kondele"],
    "Kitui": ["Kitui Town", "Mwingi", "Kangundo", "Kwa Vonza"],
    "Kwale": ["Kwale Town", "Diani", "Ukunda", "Majarija"],
    "Laikipia": ["Nanyuki", "Nyahururu", "Rumuruti", "Ngarua"],
    "Lamu": ["Lamu Town", "Mpeketoni", "Hulugho", "Witu"],
    "Machakos": ["Machakos Town", "Mavoko", "Kangundo", "Masinga"],
    "Makueni": ["Wote", "Makueni Town", "Kangundo", "Mavindu"],
    "Mandera": ["Mandera Town", "Bula Hawa", "Rhamu", "Libehia"],
    "Marsabit": ["Marsabit Town", "Saku", "North Horr", "Turbi"],
    "Mombasa": ["Mombasa Town", "Likoni", "Shanzu", "Ganjoni"],
    "Murang'a": ["Murang'a Town", "Kenol", "Kangema", "Maragua"],
    "Nairobi": ["Nairobi City", "Westlands", "Kilimani", "Lang'ata"],
    "Nakuru": ["Nakuru Town", "Naivasha", "Molo", "Gilgil"],
    "Nandi": ["Kapsabet", "Nandi Hills", "Mosoriot", "Kaptagat"],
    "Narok": ["Narok Town", "Maasai Mara", "Nakuru", "Sekenani"],
    "Nyamira": ["Nyamira Town", "Bonyamatuta", "Manga", "Ekerenyo"],
    "Nyandarua": ["Ol Kalou", "Ndaragwa", "Karatina", "Njiru"],
    "Samburu": ["Maralal", "Samburu East", "Samburu West", "Baragoi"],
    "Siaya": ["Siaya Town", "Bondo", "Ugunja", "Usigu"],
    "Taita Taveta": ["Voi", "Taveta", "Mwatate", "Wundanyi"],
    "Tana River": ["Garissa", "Bura", "Tana Delta", "Madogo"],
    "Tharaka Nithi": ["Chuka", "Mwingi", "Kiritiri", "Marimanti"],
    "Trans Nzoia": ["Kitale", "Kiminini", "Saboti", "Cherangany"],
    "Uasin Gishu": ["Eldoret", "Turbo", "Ziwa", "Kesses"],
    "Vihiga": ["Vihiga Town", "Mbale", "Sabatia", "Luanda"],
    "Wajir": ["Wajir Town", "Tarbaj", "Bute", "Wajir East"],
    "West Pokot": ["Kapenguria", "Makutano", "Kacheliba", "Sigor"],
  };

  const counties = Object.keys(countiesAndTowns);

  const handleCountyChange = (e) => {
    const selectedCounty = e.target.value;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      county: selectedCounty,
      town: '', // Reset town when county changes
    }));

    // Update towns based on selected county
    if (countiesAndTowns[selectedCounty]) {
      setTowns(countiesAndTowns[selectedCounty]);
    } else {
      setTowns([]);
    }
  };

  const calculateTotalPrice = () => {
    if (!cart || !Array.isArray(cart)) {
      return 0;
    }
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (userInfo.firstName && userInfo.lastName && userInfo.email && userInfo.address) {
      const orderNumber = Math.floor(Math.random() * 1000000000);
      const date = new Date().toLocaleDateString();
      const total = calculateTotalPrice();
      const paymentMethod = 'Credit Card';

      const orderDetails = cart.map((item) => ({
        id: item.id,
        productName: item.name,
        price: item.price,
      }));

      navigate('/order-confirmation', {
        state: {
          orderNumber,
          date,
          total,
          paymentMethod,
          orderDetails,
        },
      });
    } else {
      console.error('Please fill in all required fields.');
    }
  };

  return (
    <div className="checkout-container">
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form className="check-form">
         
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={userInfo.firstName}
            onChange={handleChange}
            required
          />

          
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={userInfo.lastName}
            onChange={handleChange}
            required
          />

         
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />

         
          <textarea
            id="address"
            name="address"
            placeholder="Street Address"
            value={userInfo.address}
            onChange={handleChange}
            required
          />

        
          <select
            id="county"
            name="county"
            value={userInfo.county}
            onChange={handleCountyChange}
            required
          >
            <option value="">Select your county</option>
            {counties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>

          
          <select
            id="town"
            name="town"
            value={userInfo.town}
            onChange={handleChange}
            required
          >
            <option value="">Select your town</option>
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>

        
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={userInfo.phoneNumber}
            onChange={handleChange}
            required
          />
        </form>
      </div>

      <div className="checkout-summary">
        <div className="cart-summary">
          <h2>Checkout Summary</h2>
        
          <ul className="check-list">
            {cart.map((product) => (
              <li key={product.id}>
                <img className="check-img" src={product.image} alt={product.name} />
                <h4 className="check-name">{product.name}</h4>
                <p className="check-quantity">{product.quantity}</p>
                <p className="check-price">ksh {product.price}</p>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: ksh {calculateTotalPrice()}</p>
        </div>

 <div className="payment-methods">
      <FaCcVisa size={40} title="Visa" />
      <SiPaypal size={40} title="PayPal" />
      <FaCcMastercard size={40} title="Mastercard" />
      <MdPhoneIphone size={40} title="MPesa" />
    </div>
          <button className="checkout-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    
  );
};

export default Checkout;
