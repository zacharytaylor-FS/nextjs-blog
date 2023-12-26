//`app/about/page.jsx` is the UI for the '/about' URL
//Server Component
function AboutPage() {
  return (
    <section>
      About Page
      <h1>Building RESTful APIs</h1>
      <div className="flex w-full flex-col">
      
 REST API is a certain style of application program interface that can use HTTP request to use and access data. When a client request resources using REST API, a server will send back a current state of the resource requested. All request and responses must follow a certain protocol like HTTP.

We interact with data using HTTP methods:

GET: to get a request

POST: To create a new request

PATCH: To edit or update existing request

DELETE: To delete a request
      </div>  

    </section>
  )
}

export default AboutPage
