// components/WorkForm.tsx
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const WorkForm: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    isApply: false,
    // workType: 'FULL_TIME',
    applyLink: '',
    applyingDate: '',
    isAvailable: false,
    deadLine: '',
    salary: '',
    stack: [""],
    action: '',
  });
  const router = useRouter();

  const handleChange = (e: any) => {
    
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/work', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const result = await response.json();
      router.push('/');
    
      // Handle success (e.g., redirect or show a message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="company" className="block text-gray-700">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
            
            required
          />
        </div>
        <div>
          <label htmlFor="isApply" className="block text-gray-700">Is Apply</label>
          <input
            type="checkbox"
            id="isApply"
            name="isApply"
            checked={formData.isApply}
            onChange={handleChange}
            className="form-checkbox"
          />
        </div>
        {/* <div>
          <label htmlFor="workType" className="block text-gray-700">Work Type</label>
          <select
            id="workType"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
          >
            <option value="FULL_TIME">Full-Time</option>
            <option value="PART_TIME">Part-Time</option>
            <option value="INTERNSHIP">Internship</option>
            <option value="FREELANCE">Freelance</option>
          </select>
        </div> */}
        <div>
          <label htmlFor="applyLink" className="block text-gray-700">Apply Link</label>
          <input
            type="text"
            id="applyLink"
            name="applyLink"
            value={formData.applyLink}
            onChange={handleChange}
             className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="applyingDate" className="block text-gray-700">Applying Date</label>
          <input
            type="date"
            id="applyingDate"
            name="applyingDate"
            value={formData.applyingDate}
            onChange={handleChange}
             className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
            
          />
        </div>
        <div>
          <label htmlFor="isAvailable" className="block text-gray-700">Is Available</label>
          <input
            type="checkbox"
            id="isAvailable"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleChange}
            className="form-checkbox"
          />
        </div>
        <div>
          <label htmlFor="deadLine" className="block text-gray-700">Deadline</label>
          <input
            type="date"
            id="deadLine"
            name="deadLine"
            value={formData.deadLine}
            onChange={handleChange}
            className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
        
          />
        </div>
        <div>
          <label htmlFor="salary" className="block text-gray-700">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
             className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="stack" className="block text-gray-700">Stack</label>
          <input
            type="text"
            id="stack"
            name="stack"
            value={formData.stack.join(', ')}
            onChange={(e) => setFormData({ ...formData, stack: e.target.value.split(',').map(s => s.trim()) })}
            className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="action" className="block text-gray-700">Action</label>
          <input
            type="text"
            id="action"
            name="action"
            value={formData.action}
            onChange={handleChange}
            className="w-full border border-black text-black rounded-md p-2 focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default WorkForm;
