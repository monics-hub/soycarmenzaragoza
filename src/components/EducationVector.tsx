export default function EducationVector(){
    return(
        <div className="relative">
            <div className="w-96 h-96 relative">
            {/* Desk */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-48 h-4 bg-brand-bright rounded"></div>
            <div className="w-4 h-24 bg-gray-600 absolute left-8 top-4"></div>
            <div className="w-4 h-24 bg-gray-600 absolute right-8 top-4"></div>
            </div>
            
            {/* Books and items on desk */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex items-end space-x-2">
                <div className="w-8 h-16 bg-brand rounded-t"></div>
                <div className="w-8 h-12 bg-red-400 rounded-t"></div>
                <div className="w-8 h-20 bg-brand-bright rounded-t"></div>
                <div className="w-12 h-8 bg-gray-400 rounded"></div>
                <div className="w-6 h-24 bg-red-400 rounded-t"></div>
            </div>
            </div>
            
            {/* Lamp */}
            <div className="absolute bottom-20 right-12">
            <div className="w-16 h-16 bg-brand rounded-full"></div>
            <div className="w-2 h-12 bg-gray-600 mx-auto"></div>
            <div className="w-8 h-2 bg-gray-600 rounded mx-auto"></div>
            </div>
            
            {/* Plant */}
            <div className="absolute bottom-20 left-12">
            <div className="w-8 h-12 bg-brand-bright rounded-t-full"></div>
            <div className="w-12 h-8 bg-gray-600 rounded-b mx-auto -mt-2"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-8 h-8 bg-brand rounded-full"></div>
            <div className="absolute top-16 left-16 w-6 h-6 bg-skin rounded-full"></div>
            <div className="absolute top-32 right-16 w-4 h-4 bg-brand-bright rounded-full"></div>
            </div>
        </div>
    )
}