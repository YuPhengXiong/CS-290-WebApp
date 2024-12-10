function TopicsPage(){
    return (
        <>
            <h2>Web Development Topics</h2>
            <nav>
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStylesheets">Cascading Stylesheets</a>
            </nav>

            <article id="webServers"class>
                <h3>Web Servers</h3>
                {/*Explain the concept of a designated home page and how its name relates to different servers and languages.*/}
                <p> 
                    In a home page, there are multiple things you could do. It allows a user an
                    entry level feeling of what they are looking up on the web. On the web it consists
                    of 3 core technologies. The <strong>Hyper Transfer Protocol (HTTP)</strong> is a
                    protocol that allows sending messages and receiving them as well. The <strong>Uniform Resource Locator (URL)</strong>
                    is a web address that brings you to the location of where you want to go.
                    The last core is <strong>Hypertext Markup Language (HTML)</strong> which is a language used
                    for links on a web page. The HTML consists of hypertext and hypermedia. <strong>Hypertext</strong>
                    is text links that are made on the web to hold links to other text documents and article.
                    <strong>Hypermedia</strong> are documents that also not only hold text, but contain graphical media and videos.
                    The main source of a dedicated homepage is the to start the request of files, by using the <strong>/</strong> symbol
                    then it sends back the request file that was labeled after the <strong>/</strong> mark such as <strong>index.html</strong>, and
                    with other sources stated in the Exploration <q>On other servers, such as Microsoft's .NET platform, the use of default.html is allowed as a homepage.</q>
                    This is also a thing for other servers depending on what is their default homepage.
                </p>
                {/*Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen (use the concepts provided in the Exploration). 
                    What is different about the file's details when viewed from the web server versus the local computer?*/}
                <p>
                    In a Web Dev/Inspector Network tab, it outputs the page's status, method, IP,
                    policy, language, cache instructions and browser version. It also shows the 
                    <strong>request</strong> and <strong>respond</strong> methods. The main differences
                    between view from a web server versus local computer is that when looking at the web
                    server, you are always be connected to the internet to access web servers. Also in a file
                    it is all done in <strong>LAN</strong>, so multiple users that are connect thought the
                    same network can access any file that is stored in a file server. What I observed from the 
                    Network tab is that when we look through the different servers the difference I notice is 
                    in the web server, it has a <strong>Remote Address</strong> and the request URL is from our engr web servers,
                    while the local server version doesn't have it, but instead shows file location from our local hard drive.
                </p>
                {/*Explain why the favicon.ico file has a status 200, but the main.css and main.js files have a status 404 (or 400, if that is what you see).*/}
                <p>
                    The reason favicon.ico file displays a status code of 200 is because
                    the <strong>request</strong> and <strong>response</strong> of that file was a success and no error occurred.
                    The main.css and main.js files show an error status 404 is because based on our exploration,
                    it stated <strong>"The requested resource is not found on the server."</strong>, which means
                    that the source of the file was not found within the server. These <strong>error codes</strong>
                    are significant feedback, because it will help developers understand what needs to 
                    be fixed so that the file could be found.
                </p>
                {/*Explain the parts of your web server's URL. What are the scheme, the subdomains, the host domain, and the resources?*/}
                <p>
                    We can use our personal url that we would be using for these assignments, <i>https://web.engr.oregonstate.edu/~xiongyup/a1-xiongyup</i>. 
                    In order for a <strong>URL</strong> to work, all parts of the URL must work properly to get you to your destination 
                    on the internet. The <strong>scheme</strong> is the protocol that is used to allow resources to request and responds.
                    A great example is from our url is the section <strong>https</strong>, which is the scheme in our url.
                    The <strong>sub-domain</strong> is the name for the server machine that is connected to a specific IP address, such as <strong>web and engr</strong>. 
                    That we use for our assignments to allow us and other authorized users to access our web from OSU web server.
                    The <strong>host domain</strong> is the name of the destination you are trying to go to. For our url it would be the section <strong>oregonstate.edu</strong>
                    The <strong>resources</strong> are paths in a web page, to allow the user to get to a specific destination on the web page. 
                    Like if you were to want to open a specific file on the web, you would need to list the name of the file at the end of the url with the <q>/</q> mark.
                    In our url we can see that we have two destinations, <strong><q>~xiongyup</q></strong> and <strong><q>a1-xiongyup</q></strong> that are used to reach our
                    destination.
                </p>
            </article>
            
            <article id="frontendDesign" class>
                <h3>Frontend Design</h3>
                {/*The concept of frontend design, in a <p> paragraph.*/}
                <p>
                    The concept of frontend design is to please the users at first look, whether it be from they way of design, and the color schemes.
                    Some important factors that must be met in a great frontend design is the <strong>graphical user-interface (GUI)</strong>, <strong>color scheme</strong>,
                    <strong>font</strong>, and lastly any navigation systems. All with making sure to have great usability experience for the user.
                </p>
                {/*The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions.*/}
                <p>
                    <dl>
                        <dt>Effective</dt>
                        {/*Effective*/}
                        <dd>
                            The definition of <strong>Effective</strong>, is how easy and simple it is for the user to 
                            reach their goal and how accurate the results are.
                        </dd>

                        <dt>Efficient</dt>
                        {/*Efficient*/}
                        <dd>
                            The definition of <strong>Efficient</strong>, is how quickly a task is executed.
                        </dd>

                        <dt>Enjoyable/Engaging</dt>
                        {/*Enjoyable/Engaging*/}
                        <dd>
                            The definition of <strong>Enjoyable/Engaging</strong> is how a website makes the user feel,
                            while using the website, whether it be happy or excited. It also needs to grab and hold the
                            attentions of the user.
                        </dd>

                        <dt>Easy to Learn/Navigate</dt>
                        {/*Easy to Learn/Navigate*/}
                        <dd>
                            The definition of <strong>Easy to Learn/Navigate</strong>, is how a user should be able to 
                            go through your website and be able to get to there goal. It should also be very common, to 
                            the point of when a user should be able to do it again when prompted to.
                        </dd>
                        <dt>Error-free or Error-tolerant</dt>
                        {/*Error-free or Error-tolerant*/}
                        <dd>
                            The definition of <strong>Error-free or Error-tolerant</strong>, is how a website should contain minimal
                            to none error for the user when trying to navigate to their goal.
                        </dd>
                    </dl>
                </p>
                {/*The purpose of each of the page layout tags, in a <p> paragraph.  Focus on the 6 we use in this assignment.*/}
                <p>
                    {/*<header>*/}
                    The <strong>&lt;header&gt;</strong> tag is the title that displays to the user to let them know what the website is. A great example is what 
                    this article's header, it displays the authors name. It is also where you will be using <strong>&lt;h1&gt;</strong> to display
                    our first header.
                </p>
                <p>
                    {/*<nav>*/}
                    The <strong>&lt;nav&gt;</strong> tag is a section that contains navigation systems to allow a user to be able to get to certain destinations either
                    within the file, or to go to a separate file. In this section it includes tags such as  which contains href that would
                    be used to allow user to click on the name and it will take them to the destination.
                </p>
                <p>
                    {/*<main>*/}
                    The <strong>&lt;main&gt;</strong> tag is where majority of our coding is happening. It includes sections, articles, paragraphs, footer, and many more.
                    But in our case we are primarily using it to write paragraphs and list. 
                </p>
                <p>
                    {/*<section>*/}
                    The <strong>&lt;section&gt;</strong> tag is used for grouping content. Like stated in the exploration, it stated <q>If there is not a 
                    good way to classify the content in the section using a heading, you may want to consider using a article instead. 
                    A section should only be used if all the content is related.</q> Which demonstrates that any information that is within relation,
                    should be sectioned out with the <strong>&lt;section&gt;</strong> tag.
                </p>
                <p>
                    {/*<article>*/}
                    The <strong>&lt;article&gt;</strong> tag is a tag that is used within the <strong>&lt;section&gt;</strong> tag, where it holds contents, such as
                    text information, images, and more. In the article tag, if there are specific topics that would need to be section apart, you could use the <strong>id=""</strong>
                    format within the article tag. This is used to separate different articles that are in the same section tag.
                </p>
                <p>
                    {/*<footer>*/}
                    The <strong>&lt;footer&gt;</strong> tag is used to hold copyrights to the file. It could also be used to hold text that would normally not be seen in the
                    main body. 
                </p>
                {/*How anchors link to external content, internal content, and from page-to-page, written in an <ol> ordered list. Focus on the concepts from the Explorations.*/}
                <p>
                    <ol>
                        {/*External Anchor*/}
                        <li>
                            An <strong>External anchor</strong> is used to connect one file to another by a click of link showing us a absolute path, because to uses direct urls of specific files
                            and documents that are outside of the home page. For this case we have 2 HTML files that we want to connect to be able to go back and forth with each file.
                        </li>
                        {/*Internal Anchor*/}
                        <li>
                            An <strong>Internal anchor</strong> is used within a file to navigate to a section of the file, so its more like a relative path, which takes you to a destination
                            within the url that you are in. This is really important when you have multiple articles,
                            or topics that are long. So in most cases Internal anchors are used when you have a large amount of articles and want to navigate to a specific area making 
                            it easy to get there with no errors.
                        </li>
                        {/*Page-to-Page*/}
                        <li>
                            With a <strong>page-to-page</strong> anchor, this will allow a user to go from one page to another by clicking on the formatted 1-4 tabs. This allows the user
                            access multiple different topics easily with no error, giving the destination a easy access point.
                        </li>
                    </ol>
                </p>
            </article>

            <article id="optimizingImages"class>
                <h3>Optimizing Images</h3>
                {/*Name and explain the purpose of the 6 major image optimizing specifications. */}
                <p>
                    The purpose of these image optimizing specifications are to allow easier and quicker access to open the set image to the user.
                    One of the major specification is <strong>Descriptive File Name</strong>, which is a detailed name about the image, to allow the <strong>search engine optimization</strong>
                    to have a better and accurate way of finding the file that the user is searching for. The next specification is <strong>Small file size</strong>, this is important, because this will determine
                    the quickness of how fast the image can be loaded. <strong>Exact dimensions</strong> specification is needed, because it allows specific photos and images to be added to a web,
                    to fit within the limits of a web. It also has an effect on load time and quality of the image/photo. <strong>Correct file format</strong> is a specification that focuses on having the proper format of files.
                    Such as correct image formats, .jpg, .png, .gif, and etc. <strong>Reduced resolution</strong> is needed so that you could get a more clear image when the reducing the image size and capacity. It would allow you to
                    control the pixel per inch (ppi). <strong>Color Mode</strong> specification is to specify the different formats and how certain color codes are need to be use depending on the format. Such as when using .png, .svg, jpg, and .webp,
                    they work with RGB color format.
                </p>
                {/*Name and explain the file formats appropriate for photos and for line art?*/}
                <p>
                    For photos, the file formats to use are <strong>JPG and WebP</strong>, <strong>JPG</strong> is a format specific for photography because of photograph's high resolution cameras and color perceptions it can gather.
                    In our exploration, it states <q>Photos typically have millions of colors, great detail, and are taken on high-res cameras, so the file sizes are too big for the web.</q> Which therefore needs to 
                    be resized into specific sizes that way it could fit in the limits of the web page. <strong>WebP</strong> is used to compress photos into smaller files, reducing the size but retain some of its quality while in a rectangular shape.
                    With line art, it uses .GIF, .PNG, and .SVG. <strong>.GIF</strong> is a 8 bit transparency file that could store animations and is typically used for line art graphics. <strong>.PNG</strong> is best used for biometric shapes, line art and solid colors,
                    because of it can hold its color scheme without major distortion occurring. <strong>.SVG</strong> is best used for text based because it is mathematically derived. Showing a more crisp image of text compared to others.
                </p>
            </article>

            <article id="favicons"class>
                <h3>Favicons</h3>
                {/*How do browsers and devices use favicons? */}
                <p>
                    The use of <strong>favicon</strong> is to display an icon on a web on the tab bar. The typical file format used now are <strong>.ico, .svg, and .png</strong>. According to our exploration, it states <q>The process begins with a symbol, which gets modified to work best on different devices, 
                    then is saved in multiple file formats for different browsers and devices. The browser picks up the files, and when asked, will save the icon and anchor to a bookmark
                    or favorites list as well as a device screen or search engine results list.</q> There are two types of favicons we learned about in our exploration, A <strong>fancy favicon</strong> and <strong>simpler favicon</strong>
                    each to there own. In a fancy favicon it display's a more detailed logo that is typically better in a larger size, focused on shadows, graininess, and outlines to create depth in the logo. 
                    While in a simple favicon, it keeps a much clean and precise plain variant, that focuses on keeping everything to a minimal, that way in a smaller size the quality looks smoother and nicer.
                </p>
            </article>

            <article id="cascadingStylesheets"class>
                <h3>Cascading Stylesheets</h3>
                {/*What are the main reasons to incorporate stylesheets in websites and apps?*/}
                <p>
                    The main reasons we incorporate stylesheets in websites and apps, is to create a style that fits the theme of the web/app. It could be from the background all the way
                    to the words in the web/app. It also helps keep our html files more clean and organized when working, because rather than flooding the html file with font changes and other 
                    styles, having a dedicated stylesheet allows developers to change and alter the default look of a website without the need to touch the html file. In a stylesheet, you would
                    be able to change the <strong>font, margins, and paddings</strong>. These are important because it will allow a website to come to life and rather than being typical it can be eye catching for
                    the targeted audience.
                </p>
                {/*What are the 5 ways to incorporate styles? And why?*/}
                <p>
                    There are 5 ways to incorporate styles into a website, 2 of them are uses of <strong>external .css rules</strong>, such as link and import. These will allow change to occur by using a separate file to change set styles. 
                    The other 3 ways are to embedded the styles within the file. In html, we are able to incorporate <strong>&lt;style&gt;</strong> within the file to allow change. There is also the method of changing inline
                    a the sections, which stated in our exploration is an old style of use. The last method is within javascript, you will alter the <strong>Document Object Model (DOM)</strong>
                    These are done to allow one off chance changes and are more often used because of the quickness and simple way of change. 
                </p>
            </article>
        </>
    )
}
export default TopicsPage;