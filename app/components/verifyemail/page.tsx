"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Verify = () => {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const router = useRouter();
    
    const verifyEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', {token});
            setVerified(true);
            setError(false);
        } catch (error:any) {
            setError(true);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");

        // const {query} = router;
        // const urlTokenTwo = query.token;
    }, []);

    useEffect(() => {
        setError(false);
        if(token.length > 0){
            verifyEmail();
        }
    }, [token]);

  return (
    <div>
      <h1>Verify Email</h1>
      <h2>
        {token ? `${token}` : "no token"}
      </h2>
      {verified && (
        <div>
            <h2>Verified</h2>
            <Link href='/login'></Link>
        </div>
      )}
      {error && (
        <div>
            <h2>error</h2>
        </div>
      )}
    </div>
  )
}

export default Verify
