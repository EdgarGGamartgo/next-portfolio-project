import Link from 'next/link'

export const Header = () => {
    return (
        <>
        <p className='customClass'>I am a styled P element</p>
        <p className='customClassFromFile'>I am a styled P element</p>
        <Link href='/'>
            <a style={
                {
                    'fontSize': '20px'
                }
            }> Home </a>
        </Link>
        <Link href='/about'>
            <a> About </a>
        </Link>
        <Link href='/portfolios'>
            <a> Portfolios </a>
        </Link>
        <Link href='/blogs'>
            <a> Blogs </a>
        </Link>
        <Link href='/cv'>
            <a> CV </a>
        </Link>
        <style jsx global>
            {
                `
                     .customClass {
                         color: red
                }
                `
            }
        </style>
        </>
    )
}