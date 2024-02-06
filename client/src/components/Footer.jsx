import { Footer } from "flowbite-react";



export default function Footercomp() {

  return (
    <Footer container className="border border-t-8 border-teal-500">
        
        <div className="w-full max-w-7xl mx-auto">

            <div className="grid w-full justify-between sm:flex md:grid-cols-1">                  

                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title="About" />
                        <Footer.LinkGroup col>
                            <Footer.Link 
                                href="https://www.crayola.com/" 
                                target="_blank">
                                Crayola
                            </Footer.Link>
                            <Footer.Link 
                                href="/about" 
                                target="_blank">
                                Why I Rant...
                            </Footer.Link>                           
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Wake the fuck up" />
                        <Footer.LinkGroup col>
                            <Footer.Link 
                                href="https://www.urbandictionary.com/define.php?term=Feng+shit" 
                                target="_blank">
                                Feng Shit
                            </Footer.Link>
                            <Footer.Link 
                                href="/about" 
                                target="_blank">
                                Why I Rant...
                            </Footer.Link>                           
                        </Footer.LinkGroup>
                    </div>

                    <div>
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link 
                                href="https://www.reddit.com/r/dankmemes/" 
                                target="_blank">
                                Your feelings are shit
                            </Footer.Link>
                            <Footer.Link 
                                href="https://www.urbandictionary.com/define.php?term=deez+nuts" 
                                target="_blank">
                                Deez Nuts
                            </Footer.Link>                           
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>

            <Footer.Divider />
            <div>
                <Footer.Copyright href="#" by="Gary's Rant" year={new Date().getFullYear()}/>
            </div>

            


        </div>





    </Footer>
  );
}

