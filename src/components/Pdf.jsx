import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const UserTable = () => {
    // Sample JSON data
    const jsonData = [
        { name: "John Doe", age: 30, email: "john@example.com" },
        { name: "Jane Smith", age: 25, email: "jane@example.com" },
        { name: "Alice Johnson", age: 28, email: "alice@example.com" },
    ];

    // Function to generate PDF from JSON data
    const generatePDF = () => {
        const doc = new jsPDF();
        const columns = [
            { header: "Name", dataKey: "name" },
            { header: "Age", dataKey: "age" },
            { header: "Email", dataKey: "email" },
        ];

        // Add title
        doc.setFontSize(18);
        doc.text("User Information", 14, 10);

        // Add table using autoTable
        doc.autoTable({
            head: [columns.map(col => col.header)],
            body: jsonData.map(item => ({
                name: item.name,
                age: item.age,
                email: item.email,
            })),
            startY: 20, // Start Y position for the table
            theme: 'grid', // Table theme
        });

        // Save the PDF
        doc.save("user_information.pdf");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Information Table</h1>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Age</th>
                        <th className="border px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.age}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={generatePDF}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Download PDF
            </button>
        </div>
    );
};

export default UserTable;
