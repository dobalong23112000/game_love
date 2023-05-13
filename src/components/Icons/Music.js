import React from 'react'

const Music = () => {
    return (
        <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_148_245)">
                <path d="M36 0C13.5 0 9 4.5 9 4.5V22.905C8.325 22.68 7.515 22.5 6.75 22.5C3.015 22.5 0 25.515 0 29.25C0 32.985 3.015 36 6.75 36C10.485 36 13.5 32.985 13.5 29.25V11.385C16.785 10.35 22.455 9.405 31.5 9.135V18.405C30.825 18.18 30.015 18 29.25 18C25.515 18 22.5 21.015 22.5 24.75C22.5 28.485 25.515 31.5 29.25 31.5C32.985 31.5 36 28.485 36 24.75V0Z" fill="#5747BC" />
            </g>
            <defs>
                <filter id="filter0_i_148_245" x={0} y={0} width={36} height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_148_245" />
                </filter>
            </defs>
        </svg>


    )
}

export default Music