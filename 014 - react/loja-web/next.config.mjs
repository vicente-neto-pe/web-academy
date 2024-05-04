/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['page.tsx'],
    dir: 'src',
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"ranekapi.origamid.dev"
            }
        ]
    }
};

export default nextConfig;
