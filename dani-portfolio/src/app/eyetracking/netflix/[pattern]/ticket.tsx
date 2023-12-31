export const NetflixTicket = ({ color }: { color: string }) => {
    return (
        <svg
            className="inline-block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-name="Checkmark"
            aria-hidden="true"
        >
            <path
                d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                fill={color}
            ></path>
        </svg>
    )
}
