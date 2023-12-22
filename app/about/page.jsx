// `app/about/page.jsx` is the UI for the '/about' URL
import {
  Tab,
  Tabs
} from "@nextui-org/tabs";
import MyCard from "../../components/Card";
// Server Component
function AboutPage() {
  return (
    <section>
      About Page
      <MyCard />
      <h1>Building RESTful APIs</h1>
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          
        </Tab>
        <Tab key="music" title="Music">
          
        </Tab>
        <Tab key="videos" title="Videos">
          
        </Tab>
      </Tabs>
    </div>  

 REST API is a certain style of application program interface that can use HTTP request to use and access data. When a client request resources using REST API, a server will send back a current state of the resource requested. All request and responses must follow a certain protocol like HTTP.

We interact with data using HTTP methods:

GET: to get a request

POST: To create a new request

PATCH: To edit or update existing request

DELETE: To delete a request
    </section>
  )
}

export default AboutPage
