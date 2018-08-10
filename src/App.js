import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Content from './components/Content'
import { Container, Row, Col } from 'reactstrap';
import Cart from './components/Cart'

class App extends Component {
  getItems() {        
    return [{id: 1,quantity:1,currency:"NZD", name: "Panty", price: 3.00, url:"https://lh3.googleusercontent.com/yWb0_7cE9fp6O0na2RljvelYWOOJWGzQGQ1Fv7kcIcCTbubntqubqZFrKS4SxiL7g4yjLFEPrhNfRtlgN1GajqhSZamlKA9FsVuy_mNtA26ambiK9QF-1jrSzGSYmmg9YFUbS_-oQjacCV1uxrZTk9PUyZkIopCBpLdtLZ5ZQHoIzrEGIjePE_a20OzhxIfMiHXWTitroxr_jCSG8ZqWhES-5Mu2Dmu-LOkj61HiOrGmuZagW8fWTJgMH_y0-fp5KB_cACiCGUwduGG1T55DYlofflpssuE_MERdrpLvjyuvCwl0VMbg_vpGqyyENyw9luWAmULWlDVBEz3TwYUd-jubPpdtc9_GoN1HvCSvvPKCyievNPDnsagqF9OdtGy1rA6AYb9k4aKlaETf-JYZvvRgR5uHfHnbj8uo33Nc_QiAt11qJMBu48ODxHNJOaCiINCj982Y-rLoyBbok93mywW4gj6BSpcUrw4ASIfR0ibwm1NtsFkHSQZxMbxvsWFys09DZ9sSO4jAlvYETVOK7Eh6YHn-saV3khhWIB7QueM6y28TKwTIwnHmsip-04OrphN23SIwHH96Gl4ozzzo7gS18YEFGl867oLl1Jw=s600-no"},
            {id: 2,quantity:1,currency:"NZD", name: "Semy Panty", price: 3.00,url:"https://lh3.googleusercontent.com/0WsEMwVbctFvr0uEqwBR85u6PJKT6-4WZlgLaC-GN_O3zwGg3LEAf3xT2BTzKzbAWOMZPG_pjvmoLTdxnfRshhUaisySpi6p3WoTXs9KVQcZ0qMNfviTBwME2fRcdXd6w_SFRSPISIGPrLITm1fHClJI0qkUcgc77cAD2cu6dhkVcKuN2b2_U6Q5v72lmAxy5hONcjehumqFLNSX0MpfB00vADCIxCdSnB9bPlPXVq50afuNG8cBpn-NI6osdhwwDBJOHNPGLxVaDIc5qQwYFlhFGshtLhBt55FFRYyGsWJyV8VnQkIbhv4b0mUKGNwP3CVDjZYqJi_ebCc5k5sFXSWvQwvGgIO8TNliB4Tf-wnPrRPMqYCnBD9BupbInhokvLC4V-3THONDY6es3T9tlQLixa3brk_xYxzYSzVoUdMq5AEWssPjahVsDe5BBZumFyPM-kZsV7G-MiwgjeVMZvQ4RRglo1JZaOckiJrhwhcBwE5TxDq1NTk57kDSJHrrQyCdW-F9fo9rVC4YD6Mj8dKKwWZuGoClpSohZoV3Wdlae890jUn10hAPV_HTFNFsagcRLn3RsqbLwd8y_ZTfoFrIOQz95cp3bbIuNyk=s600-no"},
            {id: 3,quantity:1,currency:"NZD", name: "Loreal", price: 3.00,url:"https://lh3.googleusercontent.com/TJflRZPJQUIAyH25vjCfeFDCTXIUrj2lzMgyZJ-w7ryaKppl-lqDTqVwkl6QQNVjdpeNmkW2ioyWKnK7Ss0-UXsLeaAn5FgN87bkKU0Il612NgsprWKvb0u0gqVnvwY1bKYIVcn8CzCluVeoMSLEpI0gJwa1M-7ASobUoZGNx-7gtd70lpbLQlxXj833Qeyf48dm3RqBMh0BVhxYJIC59mcuOakOL9fBdbCatNbCi7GO4SWLsgWXCC5i9SSEpzB9RRzdrZWmeIC-E_hoWLlORbrcAHT4Ah0PE3xWUQCExgDmdbMAu0TQ5JOxrlH-gBpF9nIFMjfZmBbxEqJlHP5wk_n5mSsudvpU6atKiZEnbH3L1BEAx9ak1FcQV66Imu8IBF0S7-Rw1MvJahtlDgLPZPWkXQEB5i-knKm8Zu0h5ra6QeBBjhcuO-jTzgSedISlCpZ-veWZri2fGsUuQNVk3dWlN_EWyXednen2aaxxVYy6tKtqXDfc0-5_G9qwUG3-s_BGKchORVpoTojAiFc9Dtozk7_xWBbejB5vFZqQQdvQ7E5OOV27bMJlvbX6V_cUI5Y3ZSXd7u6tkP-i9m_RYWg-E3LBB-h6e33Y9cU=s600-no"},
            {id: 4,quantity:1,currency:"NZD", name: "Full Panty", price: 3.00,url:"https://lh3.googleusercontent.com/4RIXVQDomIe3IAy7mdh1Yf3LMgPYbIpaMBm8FdZgpuyWVYqNRbCZmDItfQLYVhawHhDtQrLVMm5iHRk4O5ugvZSiFh9icrE3LzA2-Xof-s9QWvE8pb2jgOfJYml8oLFY3_d_6WvbEnPuMPFZcajDZfN4oreTSM6szSpLFfERWHUaxY_9onWAJPZdGBnUh5BUIRnTCDoXjiDR_FeaCl1LqoYdTVMWfsp6eHzl0jgVFRUtfuWIWbhroyx-qox1webeA0PKlW_ngMlzHHqpd77IIx8Cy5c1_3AFFfacXYOf1sd3ikYEd1gWpQoKg9EkjVjJ2iAGxEl4Cy7rYOBDRzlUkmVsPNw4fPgERaW56LQ8zuNQ2rH7E2FalysK39NY-fU8ZdB-a7sg1Zk6o4pw7jUV4kajDeL5aBhAQpz3OKZuwV0VjsEBAmWB0pUALS8ygNf0HrE_wfSIcIZj3-4tFLWkCSmnOVsIjGc7gz6vU4OfIxEkg0NsU23q5eb8e26EQbre7JpFUFlNMVDEq7RCT_UC8bFWkvHwEaAeBXuUc3Hdcn9qA5v_EKXjGC1w75fIdfoZhqimguCtlbwC-UjZe7vOfat1E3U6fveZGLXDWwI=s600-no"},
            {id: 5,quantity:1,currency:"NZD", name: "Semy Panty", price: 3.00,url:"https://lh3.googleusercontent.com/0WsEMwVbctFvr0uEqwBR85u6PJKT6-4WZlgLaC-GN_O3zwGg3LEAf3xT2BTzKzbAWOMZPG_pjvmoLTdxnfRshhUaisySpi6p3WoTXs9KVQcZ0qMNfviTBwME2fRcdXd6w_SFRSPISIGPrLITm1fHClJI0qkUcgc77cAD2cu6dhkVcKuN2b2_U6Q5v72lmAxy5hONcjehumqFLNSX0MpfB00vADCIxCdSnB9bPlPXVq50afuNG8cBpn-NI6osdhwwDBJOHNPGLxVaDIc5qQwYFlhFGshtLhBt55FFRYyGsWJyV8VnQkIbhv4b0mUKGNwP3CVDjZYqJi_ebCc5k5sFXSWvQwvGgIO8TNliB4Tf-wnPrRPMqYCnBD9BupbInhokvLC4V-3THONDY6es3T9tlQLixa3brk_xYxzYSzVoUdMq5AEWssPjahVsDe5BBZumFyPM-kZsV7G-MiwgjeVMZvQ4RRglo1JZaOckiJrhwhcBwE5TxDq1NTk57kDSJHrrQyCdW-F9fo9rVC4YD6Mj8dKKwWZuGoClpSohZoV3Wdlae890jUn10hAPV_HTFNFsagcRLn3RsqbLwd8y_ZTfoFrIOQz95cp3bbIuNyk=s600-no"},
            {id: 6,quantity:1,currency:"NZD", name: "Loreal", price: 3.00,url:"https://lh3.googleusercontent.com/TJflRZPJQUIAyH25vjCfeFDCTXIUrj2lzMgyZJ-w7ryaKppl-lqDTqVwkl6QQNVjdpeNmkW2ioyWKnK7Ss0-UXsLeaAn5FgN87bkKU0Il612NgsprWKvb0u0gqVnvwY1bKYIVcn8CzCluVeoMSLEpI0gJwa1M-7ASobUoZGNx-7gtd70lpbLQlxXj833Qeyf48dm3RqBMh0BVhxYJIC59mcuOakOL9fBdbCatNbCi7GO4SWLsgWXCC5i9SSEpzB9RRzdrZWmeIC-E_hoWLlORbrcAHT4Ah0PE3xWUQCExgDmdbMAu0TQ5JOxrlH-gBpF9nIFMjfZmBbxEqJlHP5wk_n5mSsudvpU6atKiZEnbH3L1BEAx9ak1FcQV66Imu8IBF0S7-Rw1MvJahtlDgLPZPWkXQEB5i-knKm8Zu0h5ra6QeBBjhcuO-jTzgSedISlCpZ-veWZri2fGsUuQNVk3dWlN_EWyXednen2aaxxVYy6tKtqXDfc0-5_G9qwUG3-s_BGKchORVpoTojAiFc9Dtozk7_xWBbejB5vFZqQQdvQ7E5OOV27bMJlvbX6V_cUI5Y3ZSXd7u6tkP-i9m_RYWg-E3LBB-h6e33Y9cU=s600-no"},
            {id: 7,quantity:1,currency:"NZD", name: "Vikini", price: 3.00,url:"https://lh3.googleusercontent.com/AzAXFVBzeACzUaESi_mdVQ6lhQQvnq1_5f_j8k43-Od7JeC0t6Hcn3lfBWnO5eAs4cldsYLA_PxTyUSeScRwI4vQpy5QCB6irM5aX_nbF_3wTi2Ca1GUOyMX-LUivSpF5mE0iRcRvWcIjpmbw7NvSKDrOeMKuk1qUm4LSgpgE4cR6zdkoSP6-oyeJU1uwWBGtQ7g3krVxUk8vPjj-VJgO9BhWJ80jZYel85Rwm-mvu6fg5_gT1htjCfbLHTfBYHAR0ybmTrx3LUfuWcST1mGS0NluFdNI67dXfEdATWGuqRcURozjKkPqrgPzoVhL4-8s0sAGx1aoF0UBndMDujGFXIxvFsygdVHVZ99gqQAfDevpEP4_kIPhTSnjq9v-aS8lERwT6IUErlUGy50_CVWXhLhp2oveSKfNsuqeF_nvL87hL25Y0e_6jCPBSCklKLCAxrWE8jrOh3PWQtRryfYjIaqkYeG22QlQibhvWN2dggoxF0Nr_Wk1fv3NTop4U11kZ3H0Xa2UMa1VlEcHjmVbE5jzxJA1LVdN8YCpAvV8yABUD3R_4HCC8_De9sPLkf2HrvrZkHBMtIoZWbCIec36d0h4OqXinUkGT01P-s=s600-no"},
            {id: 8,quantity:1,currency:"NZD", name: "Vikini", price: 3.00,url:"https://lh3.googleusercontent.com/AzAXFVBzeACzUaESi_mdVQ6lhQQvnq1_5f_j8k43-Od7JeC0t6Hcn3lfBWnO5eAs4cldsYLA_PxTyUSeScRwI4vQpy5QCB6irM5aX_nbF_3wTi2Ca1GUOyMX-LUivSpF5mE0iRcRvWcIjpmbw7NvSKDrOeMKuk1qUm4LSgpgE4cR6zdkoSP6-oyeJU1uwWBGtQ7g3krVxUk8vPjj-VJgO9BhWJ80jZYel85Rwm-mvu6fg5_gT1htjCfbLHTfBYHAR0ybmTrx3LUfuWcST1mGS0NluFdNI67dXfEdATWGuqRcURozjKkPqrgPzoVhL4-8s0sAGx1aoF0UBndMDujGFXIxvFsygdVHVZ99gqQAfDevpEP4_kIPhTSnjq9v-aS8lERwT6IUErlUGy50_CVWXhLhp2oveSKfNsuqeF_nvL87hL25Y0e_6jCPBSCklKLCAxrWE8jrOh3PWQtRryfYjIaqkYeG22QlQibhvWN2dggoxF0Nr_Wk1fv3NTop4U11kZ3H0Xa2UMa1VlEcHjmVbE5jzxJA1LVdN8YCpAvV8yABUD3R_4HCC8_De9sPLkf2HrvrZkHBMtIoZWbCIec36d0h4OqXinUkGT01P-s=s600-no"}];
}
constructor(props){
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
        items : this.getItems(),
        cart:[],
        totalItems: 0
    };
}

addToCart (item) {
  var found = false;
  var newItems = this.state.totalItems+1;
  
  var updatedCart = this.state.cart.map((cartItem) => {
    
    if (cartItem.id == item.id) {      
      found = true;
      //cartItem.quantity++;
      
      return cartItem;
    } else {
      return cartItem;
    }
  });
  
  if (!found) { updatedCart.push({id: item.id,currency:item.currency, name: item.name,url:item.url, price: item.price, quantity: item.quantity}) }
  
  this.setState({
    totalItems: newItems,
    cart: updatedCart
    
  });
  
}
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
        
        </header>
        <Cart cart={this.state.cart} totalItems={this.state.totalItems} />
        <div className="content"> 
        <Container>            
            <Content className="content-body" items={this.state.items} addToCart={this.addToCart} />
        </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
