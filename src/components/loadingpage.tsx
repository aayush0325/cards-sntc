import { UserButton } from "@clerk/clerk-react";
import { ClipLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
    const location = useLocation();
    const nav = useNavigate();
    const path = location.pathname;
    let club = "";

    if (path === '/COPS23sntc') {
        club = 'COPS';
    } else if (path === '/tqcsntc11') {
        club = 'theQuantClub';
    } else if (path === '/sntc55biz') {
        club = 'bizClub';
    } else if (path === '/csi999sntc0') {
        club = 'csi';
    } else if (path === '/sae100sntc001') {
        club = 'SAE';
    } else if (path === '/sntcAMC') {
        club = 'AMC';
    } else if (path === '/ROBOsntc77') {
        club = 'robotics';
    } else if (path === '/astro69sntc') {
        club = 'astroClub';
    }
    
    console.log(club);

    function getCookie(name: string): string | null {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) {
            return parts.pop()?.split(';').shift() || null
        }
        return null
    }

    function sendSignupRequest() {
        const sessionCookie = getCookie('__session') // Get session cookie
        if (!sessionCookie) {
          console.error('Session cookie is null')
          return
        }
        fetch(
          'https://sntc-induction-server.cynikal.workers.dev/api/v1/users/signup',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sessionCookie}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => console.log('Success:', data))
          .catch((error) => console.error('Error:', error))
      }

    function sendRequest() {
        const sessionCookie = getCookie('__session') // Get session cookie
        if (!sessionCookie) {
            console.error('Session cookie is null')
            return
        }
        fetch(
            `https://sntc-induction-server.cynikal.workers.dev/api/v1/clubs/${club}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionCookie}`,
                },
            }
        )
        .then((response) => response.json())
        .then((data) => {
            if (data.updatedUser && data.updatedUser[0]) {
                console.log(data.updatedUser[0]);
                console.log('Success:', data);
                nav('/');
            } else {
                console.log('Success:', data);
                nav('/');
            }
        })
        .catch((error) => console.error('Error:', error))
    }

    useEffect(() => {
        sendSignupRequest()
        sendRequest()
    }, [])

    return (
        <div className="bg-black h-screen w-screen flex items-center justify-center">
            <link
                href='https://fonts.googleapis.com/css?family=Damion&display=swap'
                rel='stylesheet'
            />

            <div className='absolute top-5 w-full flex flex-row justify-around'>
                <h1 className='text-3xl font-bold text-white p-2'>
                    SNTC Induction 2024
                </h1>
                <UserButton />
            </div>

            <div className="flex flex-col justify-center items-center">
                <ClipLoader color="#3498db" size={120} />
                <div className="text-white text-2xl m-8">Please wait while we redirect you to the Home Page...</div>
            </div>
        </div>
    );
}
