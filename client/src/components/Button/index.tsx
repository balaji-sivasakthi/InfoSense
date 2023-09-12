import React from 'react'
import { cn } from '../../utils'

type Props = {
    children: React.ReactNode
    className?: string
    onClick: () => void
}

const Button = ({ className, children, ...rest }: Props) => {
    return (
        <button
            className={cn(
                'p-2 bg-blue-700 text-white rounded-full px-3 hover:bg-blue-600',
                className
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
