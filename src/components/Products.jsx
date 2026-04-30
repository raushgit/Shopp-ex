import React, { useState, useEffect, useRef } from "react"; // 1. Added useRef
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // 2. Use a Ref instead of a 'let' variable
  const isMounted = useRef(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      
      // 3. Check the ref value
      if (isMounted.current) {
        const jsonData = await response.json();
        setData(jsonData);
        setFilter(jsonData);
        setLoading(false);
      }
    };

    getProducts();

    // 4. Cleanup function sets the ref to false
    return () => {
      isMounted.current = false;
    };
  }, []);

  // ... (Rest of your Loading and ShowProducts components remain the same)
