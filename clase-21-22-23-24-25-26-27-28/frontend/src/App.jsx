import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen'
import ResetPasswordScreen from './Screens/ResetPasswordScreen'
import HomeScreen from './Screens/HomeScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginScreen/>}/>
			<Route path="/register" element={<RegisterScreen/>}/>
			<Route path="/login" element={<LoginScreen/>}/>
			<Route path='/forgot-password' element={<ForgotPasswordScreen/>}></Route>
			<Route path='/reset-password/:reset_token' element={<ResetPasswordScreen/>}></Route>
			<Route path='/home' element={<HomeScreen/>}></Route>
			<Route path='/product/:product_id' element={<ProductDetailScreen/>}></Route>
		</Routes>
	)
}

export default App
