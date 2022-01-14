
export default function Footer() {
    return (
        <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
            <div className="container mx-auto px-6">

                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex">
                            {/* <span className="font-bold text-gray-700 uppercase mb-2">@2022</span>
                            <div>
                            <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                            </div> */}
                            <p className="text-sm text-center text-gray-500 dark:text-gray-300">© 2022 | <a className="underline text-blue-800" href="https://www.aalhommada.com/" target="_blanck" >aalhommada</a> </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
