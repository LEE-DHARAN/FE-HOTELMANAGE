import React, { useState, useEffect } from 'react';

const Maintenance = () => {
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Pending');
  const [loading, setLoading] = useState(true);

  // Fetch maintenance requests from the server (or use mock data)
  useEffect(() => {
    const fetchMaintenanceRequests = async () => {
      // Simulating an API call to fetch requests
      const requests = [
        { id: 1, description: 'Leaking faucet', priority: 'High', status: 'In Progress' },
        { id: 2, description: 'Broken lightbulb', priority: 'Low', status: 'Completed' },
      ];
      setMaintenanceRequests(requests);
      setLoading(false);
    };
    fetchMaintenanceRequests();
  }, []);

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    // Simulate adding a new maintenance request
    const newRequest = { description, priority, status: 'Pending', id: Date.now() };
    setMaintenanceRequests([newRequest, ...maintenanceRequests]);
    setDescription('');
    setPriority('Medium');
  };

  const handleUpdateStatus = (id, newStatus) => {
    // Update status of the maintenance request
    const updatedRequests = maintenanceRequests.map((request) =>
      request.id === id ? { ...request, status: newStatus } : request
    );
    setMaintenanceRequests(updatedRequests);
  };

  if (loading) return <p>Loading maintenance requests...</p>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Maintenance Requests</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Submit a Maintenance Request</h3>
        <form onSubmit={handleSubmitRequest} className="mb-4">
          <div className="mb-4">
            <label className="block text-lg">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full"
              rows="4"
              placeholder="Describe the maintenance issue"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Priority:</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border p-2 w-full"
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Submit Request
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Existing Maintenance Requests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {maintenanceRequests.length > 0 ? (
            maintenanceRequests.map((request) => (
              <div key={request.id} className="p-4 border rounded shadow">
                <p>
                  <strong>Description:</strong> {request.description}
                </p>
                <p>
                  <strong>Priority:</strong> {request.priority}
                </p>
                <p>
                  <strong>Status:</strong> {request.status}
                </p>
                <div className="mt-4">
                  {request.status === 'Pending' && (
                    <button
                      onClick={() => handleUpdateStatus(request.id, 'In Progress')}
                      className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                    >
                      Start Task
                    </button>
                  )}
                  {request.status === 'In Progress' && (
                    <button onClick={() => handleUpdateStatus(request.id, 'Completed')}
                      className="bg-green-500 text-white px-4 py-1 rounded"
                    >
                      Mark as Completed
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No maintenance requests submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;