import React from 'react'

function Footer() {
    return (
        <div className="bg-slate-900 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
                
                <p className="text-sm">
                © {new Date().getFullYear()} Heading. All rights reserved.
                </p>
            </div>
            </div>
    )
}

export default Footer
