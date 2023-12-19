import Link from "next/link";

async function getTickets() {
  //imitate delay
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, //use 0 to opt out of using cache
    },
  });

  return res.json();
}

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="my-5 card">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      <Link href="/tickets/create">Create a new Ticket</Link>
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, Hurrah!</p>
      )}
    </>
  );
};

export default TicketList;
