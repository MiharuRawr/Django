"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "ALEK JAHAT + GALAK",
    description:
      "ALEK TUKANG MEREPET",
    image: "/familyphotos.png",
    github: "#",
    link: "#",
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      {/* @ts-ignore */}
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      {/* @ts-ignore */}
      scrollRef.current.scrollBy({
        left: 300, // Geser ke kanan 300px
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Docs
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="relative">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">DjangoFushion!</h1>
      <p className="mb-6">
        Dokumentasi ini menjelaskan beberapa helper functions yang dapat digunakan untuk berinteraksi dengan database
        di proyek Django. Setiap helper memiliki penjelasan mendetail mengenai fungsi, parameter, dan contoh
        penggunaan.
      </p>

<section id="execute">
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      1. Execute Query
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
        <path d="M520-40v-240l-84-80-40 176-276-56 16-80 192 40 64-324-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-720q21 0 39 11t29 29l40 64q26 42 70.5 69T760-520v80q-66 0-123.5-27.5T540-540l-24 120 84 80v300h-80Zm20-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/>
      </svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>execute_query</strong> digunakan untuk menjalankan SQL query mentah dan mengembalikan hasilnya
          sebagai daftar dictionary. Ini berguna untuk query yang kompleks atau ketika ORM Django tidak mencukupi.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def execute_query(sql_query, params=None):
    """
    Executes a raw SQL query and returns the results as a list of dictionaries.
    
    Parameters:
    sql_query (str): The SQL query to execute.
    params (list, optional): A list of parameters to bind to the query.
    
    Returns:
    list: A list of dictionaries representing the rows returned by the query.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute(sql_query, params or [])
            columns = [col[0] for col in cursor.description]  # Get column names
            rows = cursor.fetchall()  # Fetch all rows
        return [dict(zip(columns, row)) for row in rows]  # Convert to list of dictionaries
    except Exception as e:
        raise Exception(f"Error executing query: {e}")`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>sql_query</strong>: <em>str</em> - SQL query yang ingin dieksekusi. Contoh: 
            <code>&quot;SELECT * FROM my_table WHERE id = %s&quot;</code>.
          </li>
          <li>
            <strong>params</strong>: <em>list</em>, optional - Parameter untuk SQL query jika menggunakan placeholders. 
            Contoh: <code>[1]</code> untuk menggantikan placeholder.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`result = execute_query("SELECT * FROM my_table WHERE id = %s", [1])`}
        </pre>
        <p className="mb-4">Hasil <code>result</code> akan menjadi list dictionary yang berisi data dari baris yang sesuai.</p>
      </section>
      </section>

      <section id="insert_data">
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      2. Insert Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v240h-80v-200H520v-200H240v640h360v80H240Zm638 15L760-183v89h-80v-226h226v80h-90l118 118-56 57Zm-638-95v-640 640Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>Insert_Data</strong> digunakan untuk memasukkan data ke dalam tabel. Fungsi ini mengembalikan
          ID dari baris yang dimasukkan, sehingga Anda dapat mengetahui entri baru yang telah dibuat.
        </p>
  
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def insert_data(table_name, data):
    """
    Inserts data into the specified table and returns the ID of the inserted row.

    Parameters:
    table_name (str): The name of the table to insert data into.
    data (dict): A dictionary where keys are column names and values are the data to insert.

    Returns:
    int: The ID of the inserted row.
    """
    try:
        columns = ', '.join(data.keys())
        placeholders = ', '.join(['%s'] * len(data))  # Prepare placeholders
        sql_query = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})"
        with transaction.atomic():  # Ensure atomic transaction
            with connection.cursor() as cursor:
                cursor.execute(sql_query, list(data.values()))  # Execute the insert
                return cursor.lastrowid  # Return the last inserted ID
    except Exception as e:
        raise Exception(f"Error in insert: {e}")`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel di mana data akan dimasukkan. Contoh: 
            <code>&quot;my_table&quot;</code>.
          </li>
          <li>
            <strong>data</strong>: <em>dict</em> - Kunci adalah nama kolom, dan nilai adalah data yang ingin dimasukkan.
            Contoh: 
            <code>{"{'column1': 'value1', 'column2': 'value2'}"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`data = {
    'column1': 'value1',
    'column2': 'value2',
}
inserted_id = insert_data('my_table', data)`}
        </pre>
        <p className="mb-4">Variabel <code>inserted_id</code> akan berisi ID dari baris yang baru dimasukkan.</p>
      </section>
      </section>


      <section id="get_data">
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      3. Get Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>get_data</strong> digunakan untuk membaca data dari tabel, dengan dukungan filter, pencarian,
          limit, dan offset. Ini sangat berguna untuk paginasi dan pencarian data.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def get_data(table_name, filters=None, search=None, search_columns=None, columns='*', limit=None, offset=None):
    """
    Retrieves data from the specified table with optional filtering, searching, and pagination.

    Parameters:
    table_name (str): The name of the table to retrieve data from.
    filters (dict, optional): Filters to apply to the query (e.g., {'column_name': 'value'}).
    search (str, optional): A keyword to search for in the specified columns.
    search_columns (list, optional): Columns to search for the keyword.
    columns (str or list, optional): Columns to retrieve (default: '*').
    limit (int, optional): Limit the number of records retrieved.
    offset (int, optional): Offset for pagination.

    Returns:
    list: A list of dictionaries representing the rows returned by the query.
    """
    try:
        if isinstance(columns, list):
            columns = ', '.join(columns)  # Join columns if provided as a list
        sql_query = f"SELECT {columns} FROM {table_name}"
        conditions = []
        values = []
        if filters:
            conditions += [f"{key}=%s" for key in filters.keys()]  # Add filters to conditions
            values += list(filters.values())
        if search and search_columns:
            search_conditions = [f"{col}::text ILIKE %s" for col in search_columns]  # Prepare search conditions
            conditions.append(f"({' OR '.join(search_conditions)})")  # Combine with OR
            values += [f"%{search}%"] * len(search_columns)  # Prepare search values
        if conditions:
            where_clause = ' WHERE ' + ' AND '.join(conditions)  # Create WHERE clause
            sql_query += where_clause
        if limit:
            sql_query += f" LIMIT {limit}"  # Add LIMIT clause
        if offset:
            sql_query += f" OFFSET {offset}"  # Add OFFSET clause
        with connection.cursor() as cursor:
            cursor.execute(sql_query, values)  # Execute query with values
            columns = [col[0] for col in cursor.description]  # Get column names
            rows = cursor.fetchall()  # Fetch all rows
        return [dict(zip(columns, row)) for row in rows]  # Convert to list of dictionaries
    except Exception as e:
        raise Exception(f"Error in read: {e}")`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel dari mana data akan diambil. Contoh: 
            <code>&quot;my_table&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict</em>, optional - Filter untuk menentukan baris yang ingin diambil. 
            Contoh: 
            <code>{"{'column_name': 'value'}"}</code>.
          </li>
          <li>
            <strong>search</strong>: <em>str</em>, optional - Kata kunci untuk pencarian dalam kolom tertentu.
          </li>
          <li>
            <strong>search_columns</strong>: <em>list</em>, optional - Kolom yang akan dicari berdasarkan kata kunci.
          </li>
          <li>
            <strong>columns</strong>: <em>str</em> atau <em>list</em>, optional - Kolom yang ingin diambil, default 
            <code>*</code>.
          </li>
          <li>
            <strong>limit</strong>: <em>int</em>, optional - Batas jumlah baris yang akan diambil.
          </li>
          <li>
            <strong>offset</strong>: <em>int</em>, optional - Offset untuk paginasi.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil semua data
result_all = get_data('my_table')

# Mengambil data dengan filter
result_filtered = get_data('my_table', filters={'column1': 'value1'})

# Mengambil data dengan pencarian dan limit
result_search = get_data('my_table', search='keyword', search_columns=['column1', 'column2'], limit=10)`}
        </pre>
        <p className="mb-4">
          <code>result_all</code>, <code>result_filtered</code>, dan <code>result_search</code> akan berisi hasil 
          yang sesuai berdasarkan query yang dijalankan.
        </p>
      </section>
      </section>


      <section id="update_data">
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      4. Update Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>update_data</strong> digunakan untuk memperbarui data dalam tabel berdasarkan filter. 
          Fungsi ini tidak mengembalikan nilai tetapi akan mengeksekusi operasi update pada database.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def update_data(table_name, data, filters):
    """
    Updates data in the specified table based on the given filters.

    Parameters:
    table_name (str): The name of the table to update.
    data (dict): A dictionary where keys are column names to update and values are the new values.
    filters (dict): A dictionary where keys are column names for filtering the rows to update.

    Returns:
    bool: True if the update was successful, False otherwise.
    """
    try:
        set_clause = ', '.join([f"{key}=%s" for key in data.keys()])  # Prepare SET clause
        where_clause = ' AND '.join([f"{key}=%s" for key in filters.keys()])  # Prepare WHERE clause
        sql_query = f"UPDATE {table_name} SET {set_clause} WHERE {where_clause}"
        values = list(data.values()) + list(filters.values())  # Combine values for execution
        with transaction.atomic():  # Ensure atomic transaction
            with connection.cursor() as cursor:
                cursor.execute(sql_query, values)  # Execute update
        return True  # Indicate success
    except Exception as e:
        raise Exception(f"Error in update: {e}")`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang ingin diperbarui. Contoh: 
            <code>&quot;my_table&quot;</code>.
          </li>
          <li>
            <strong>data</strong>: <em>dict</em> - Kunci adalah nama kolom yang ingin diperbarui, dan nilai adalah 
            nilai baru. Contoh: 
            <code>{"{'column1': 'new_value'}"}</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict</em>- Nama kolom ID untuk mengembalikan ID yang baru dimasukkan. Contoh:  
            <code>&quot;user_id&quot;</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Data yang akan dimasukkan ke tabel 'users'
data_to_insert = {'name': 'Alice', 'age': 25}

# Menyisipkan data ke tabel 'users' dan mendapatkan ID dari baris baru
inserted_id = insert_get_id_data('users', data_to_insert, 'user_id')
`}
        </pre>
        <p className="mb-4">Variabel <code>inserted id</code> akan berisi <code>ID</code> dari baris yang baru saja ditambahkan jika proses berhasil.</p>
      </section>
</section>


      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      5. Delete Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>delete_data</strong> digunakan untuk menghapus data dari tabel berdasarkan filter tertentu. 
          Ini berguna untuk mengelola entri yang tidak diperlukan lagi dalam database.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def delete_data(table_name, filters):
    """
    Deletes rows from the specified table based on the given filters.

    Parameters:
    table_name (str): The name of the table from which to delete data.
    filters (dict): A dictionary where keys are column names for filtering the rows to delete.

    Returns:
    bool: True if the deletion was successful, False otherwise.
    """
    try:
        where_clause = ' AND '.join([f"{key}=%s" for key in filters.keys()])  # Prepare WHERE clause
        sql_query = f"DELETE FROM {table_name} WHERE {where_clause}"
        with transaction.atomic():  # Ensure atomic transaction
            with connection.cursor() as cursor:
                cursor.execute(sql_query, list(filters.values()))  # Execute delete
        return True  # Indicate success
    except Exception as e:
        raise Exception(f"Error in delete: {e}")`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel dari mana data akan dihapus. Contoh: 
            <code>&quot;my_table&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict</em> - Filter untuk menentukan baris mana yang akan dihapus. 
            Contoh: 
            <code>{"{'id': 1}"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`delete_success = delete_data('my_table', {'id': 1})`}
        </pre>
        <p className="mb-4">Variabel <code>delete_success</code> akan berisi <code>True</code> jika penghapusan berhasil.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      6. insert and Get Id Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M439-82q-76-8-141.5-42.5t-113.5-88Q136-266 108.5-335T81-481q0-155 102.5-268.5T440-880v80q-121 17-200 107.5T161-481q0 121 79 211.5T439-162v80Zm40-198L278-482l57-57 104 104v-245h80v245l103-103 57 58-200 200Zm40 198v-80q43-6 82.5-23t73.5-43l58 58q-47 37-101 59.5T519-82Zm158-652q-35-26-74.5-43T520-800v-80q59 6 113 28.5T733-792l-56 58Zm112 506-56-57q26-34 42-73.5t22-82.5h82q-8 59-30 113.5T789-228Zm8-293q-6-43-22-82.5T733-677l56-57q38 45 61 99.5T879-521h-82Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>insert_get_id_data</strong> digunakan untuk memasukkan data ke dalam tabel dan kemudian mengembalikan ID dari baris yang dimasukkan. Ini sangat berguna untuk mendapatkan ID dari entri baru yang dibuat.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def insert_get_id_data(table_name, data, column_id):
    """
    Inserts data into the specified table and returns the inserted row's ID.

    Parameters:
    table_name (str): The name of the table where data will be inserted.
    data (dict): A dictionary where keys are column names and values are the data to insert.
    column_id (str): The name of the ID column in the table, used to retrieve the last inserted ID.

    Returns:
    int or None: The ID of the inserted row if successful, or None if failed.
    """
    try:
        columns = ', '.join(data.keys())
        placeholders = ', '.join(['%s'] * len(data))  # Prepare placeholders
        sql_query = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})"
        
        with transaction.atomic():  # Ensure atomic transaction
            with connection.cursor() as cursor:
                cursor.execute(sql_query, list(data.values()))  # Execute the insert
                # Retrieve the last inserted ID using 'pg_get_serial_sequence' for PostgreSQL
                cursor.execute(f"SELECT currval(pg_get_serial_sequence('{table_name}', '{column_id}'))")
                inserted_id = cursor.fetchone()[0]  # Get the inserted ID
                
        return inserted_id  # Return the inserted ID
    except Exception as e:
        raise Exception(f"Error in insert_get_id: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel tempat data akan dimasukkan. Contoh:  
            <code>&quot;Users&quot;</code>.
          </li>
          <li>
            <strong>data</strong>: <em>dict</em> Dictionary dengan kolom sebagai kunci dan data sebagai nilai. Contoh:  
            <code>{"{'name': 'Alice', 'age': 25}"}</code>.
          </li>
          <li>
            <strong>column_id</strong>: <em>str</em> - Filter untuk menentukan baris mana yang akan diperbarui.
            Contoh: 
            <code>{"{'id': 1}"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`data_to_update = {'column1': 'updated_value'}
filters = {'id': 1}
update_success = update_data('my_table', data_to_update, filters)`}
        </pre>
        <p className="mb-4">Variabel <code>update_success</code> akan berisi <code>True</code> jika pembaruan berhasil.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      7. First Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="m504-292 92-70 92 70-34-114 92-74H632l-36-112-36 112H446l92 74-34 114ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>first_data</strong> digunakan untuk mengambil baris pertama dari tabel berdasarkan filter yang ditentukan. Fungsi ini memungkinkan Anda mengambil satu entri saja, yang bisa diurutkan berdasarkan kolom tertentu.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def first_data(table_name, filters=None, columns='*', order_by=None):
    """
    Retrieves the first row of data from the specified table based on optional filters and ordering.

    Parameters:
    table_name (str): The name of the table to retrieve data from.
    filters (dict, optional): A dictionary of conditions to filter the rows. Example: '{'column_name': 'value'}'.
    columns (str or list, optional): Columns to retrieve. Use '*' by default or specify a list. Example: '['name', 'age']'.
    order_by (str or list, optional): Column(s) to order the result by. Example: 'created_at DESC''.

    Returns:
    dict or None: A dictionary representing the first row, or None if no data is found.
    """
    try:
        if isinstance(columns, list):
            columns = ', '.join(columns)

        sql_query = f"SELECT {columns} FROM {table_name}"

        # Adding filters
        where_clause = ''
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause

        # Adding order by clause
        if order_by:
            if isinstance(order_by, list):
                order_by = ', '.join(order_by)
            sql_query += f" ORDER BY {order_by}"

        sql_query += " LIMIT 1"

        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            columns = [col[0] for col in cursor.description]
            row = cursor.fetchone()

        return dict(zip(columns, row)) if row else None
    except Exception as e:
        raise Exception(f"Error in get_first_data: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel tempat data akan diambil. Contoh:  
            <code>&quot;Users&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict</em> - Kondisi filter untuk menentukan baris yang diambil. Contoh:  
            <code>{"{'status': 'active'}"}</code>.
          </li>
          <li>
            <strong>columns</strong>: <em>str atau list, optional</em> - Kolom yang ingin diambil bisa berupa ( * ) untuk semua kolom atau list kolom tertentu. Contoh:  
            <code>{"['name', 'age']"}</code>.
          </li>
          <li>
            <strong>order_by</strong>: <em>str atau list, optional</em> - Kolom untuk pengurutan. Contoh:  
            <code>{" 'created_at DESC'"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil baris pertama dari tabel 'users' dengan status 'active', diurutkan berdasarkan 'created_at' secara menurun

result = first_data('users', filters={'status': 'active'}, columns=['name', 'email'], order_by='created_at DESC')
`}
        </pre>
        <p className="mb-4">Variabel <code>Result </code>akan berisi <code>dictionary </code>dari <code>baris pertama yang sesuai dengan filter dan urutan yang diberikan, atau None</code> jika tidak ada data yang cocok.</p>
      </section>


      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      8. Count Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v320L680-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54h-82l-7-40-433 77 40 226v279q-16-9-27.5-24T158-276L81-710Zm279 110v440h280v-160h160v-280H360Zm220 220Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>count_data</strong> digunakan untuk menghitung jumlah baris dalam tabel berdasarkan filter yang diberikan. Fungsi ini sangat berguna untuk mengetahui total entri yang ada dalam tabel atau yang memenuhi kriteria tertentu.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def count_data(table_name, filters=None):
    """
    Retrieves the count of rows in the specified table based on optional filters.

    Parameters:
    table_name (str): The name of the table to count rows from.
    filters (dict, optional): A dictionary of conditions to filter the rows. Example: '{'column_name': 'value'}'.

    Returns:
    int: The count of rows that match the filters, or 0 if no data is found.
    """
    try:
        sql_query = f"SELECT COUNT(*) FROM {table_name}"
 
        # Adding filters
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause
 
        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            count = cursor.fetchone()[0]  # Get the count
 
        return count
    except Exception as e:
        raise Exception(f"Error in get_data_count: {e}")

`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang ingin dihitung jumlah barisnya. Contoh: 
            <code>&quot;Users&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict, optional</em> - Kondisi filter untuk menentukan baris mana yang akan dihitung. Contoh:  
            <code>{"{'status': 'active'}"}</code>.
          </li>
          <li>
            <strong>columns</strong>: <em>str atau list, optional</em> - Kolom yang ingin diambil bisa berupa ( * ) untuk semua kolom atau list kolom tertentu. Contoh:   
            <code>{"['name', 'age']"}</code>.
          </li>
          <li>
            <strong>order_by</strong>: <em>str atau list, optional</em> - Kolom untuk pengurutan. Contoh:   
            <code>{" 'created_at DESC'"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Menghitung jumlah pengguna dengan status 'active'
active_users_count = count_data('users', filters={'status': 'active'})
`}
        </pre>
        <p className="mb-4">Variabel <code>active_users_count  </code>akan berisi <code>jumlah baris di tabel users </code>yang <code>memiliki status ( active ). </code> Jika tidak ada data yang cocok, hasilnya adalah 0.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      9. Pluck Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>pluck_data</strong> digunakan untuk mengambil nilai dari kolom tertentu di tabel. Fungsi ini mengembalikan list yang berisi nilai-nilai dari kolom yang ditentukan, yang dapat disaring menggunakan filter.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def pluck_data(table_name, column_name, filters=None):
    """
    Retrieves values from a specific column in the given table.

    Parameters:
    table_name (str): The name of the table to fetch data from.
    column_name (str): The column from which to pluck the values.
    filters (dict, optional): Conditions to filter the rows by. Example: '{'column_name': 'value'}'.

    Returns:
    list: A list of values from the specified column.
    """
    try:
        sql_query = f"SELECT {column_name} FROM {table_name}"
 
        # Adding filters
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause
 
        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            rows = cursor.fetchall()  # Get all matching rows
 
        # Return the values from the specified column
        return [row[0] for row in rows]
    except Exception as e:
        raise Exception(f"Error in pluck_data: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang akan diambil datanya. Contoh: 
            <code>&quot;Users&quot;</code>.
          </li>
          <li>
            <strong>column_name</strong>: <em>str</em> - Nama kolom yang ingin diambil nilainya. Contoh:   
            <code>&quot;email&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict, optional</em> - Kondisi filter untuk menentukan baris yang akan diambil. Contoh:    
            <code>{"{'status': 'active'}"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil semua nilai dari kolom 'email' di tabel 'users' yang memiliki status 'active'
emails = pluck_data('users', 'email', filters={'status': 'active'})
`}
        </pre>
        <p className="mb-4">Variabel <code>Emails </code>akan berisi <code>daftar alamat email </code>dari pengguna yang memiliki status<code> ( active )</code>.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      10. Distinct Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>distinct_data</strong> digunakan untuk mengambil nilai yang berbeda (distinct) dari kolom tertentu di tabel. Fungsi ini akan mengembalikan list yang berisi nilai-nilai unik dari kolom yang ditentukan, yang bisa disaring menggunakan filter.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def distinct_data(table_name, column_name, filters=None):
    """
    Retrieves distinct values from a specific column in the given table.

    Parameters:
    table_name (str): The name of the table to fetch data from.
    column_name (str): The column from which to get distinct values.
    filters (dict, optional): Conditions to filter the rows by. Example: '{'column_name': 'value'}'.

    Returns:
    list: A list of distinct values from the specified column.
    """
    try:
        sql_query = f"SELECT DISTINCT {column_name} FROM {table_name}"
 
        # Adding filters
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause
 
        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            rows = cursor.fetchall()  # Get all matching rows
 
        # Return distinct values from the specified column
        return [row[0] for row in rows]
    except Exception as e:
        raise Exception(f"Error in distinct_data: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang akan diambil datanya. Contoh: 
            <code>&quot;products&quot;</code>.
          </li>
          <li>
            <strong>column_name</strong>: <em>str</em> - Nama kolom yang ingin diambil nilai distinct-nya. Contoh:    
            <code>&quot;category&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict, optional</em> - Kondisi filter untuk menentukan baris yang akan diambil. Contoh:   
            <code>{"{'status':'active'}"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil nilai distinct dari kolom 'category' di tabel 'products' yang memiliki status 'available'
categories = distinct_data('products', 'category', filters={'status': 'available'})
`}
        </pre>
        <p className="mb-4">Variabel <code>Categories </code>akan berisi <code>daftar kategori produk yang unik </code>dan<code> memiliki status ( available )</code>.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      11. Order by Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M120-200v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>order_by_data</strong> digunakan untuk mengambil data dari tabel dengan urutan tertentu berdasarkan kolom yang ditentukan. Fungsi ini memungkinkan pengurutan data secara ascending atau descending, serta dapat menambahkan filter, limit, dan offset.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def order_by_data(table_name, order_column, ascending=True, filters=None, limit=None, offset=None):
    """
    Retrieves ordered data from the specified table.

    Parameters:
    table_name (str): The name of the table to fetch data from.
    order_column (str): The column to order the data by.
    ascending (bool): True for ascending order, False for descending. Default is True.
    filters (dict, optional): Conditions to filter the rows by. Example: '{'column_name': 'value'}'.
    limit (int, optional): The maximum number of rows to return.
    offset (int, optional): The number of rows to skip.

    Returns:
    list: A list of dictionaries representing the ordered rows.
    """
    try:
        sql_query = f"SELECT * FROM {table_name}"
 
        # Adding filters (WHERE clause)
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause
 
        # Adding ORDER BY clause
        order_direction = 'ASC' if ascending else 'DESC'
        sql_query += f" ORDER BY {order_column} {order_direction}"
 
        # Adding LIMIT and OFFSET
        if limit:
            sql_query += f" LIMIT {limit}"
        if offset:
            sql_query += f" OFFSET {offset}"
 
        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
 
        return [dict(zip(columns, row)) for row in rows]
    except Exception as e:
        raise Exception(f"Error in order_by_data: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel untuk mengambil data. Contoh:  
            <code>&quot;employees&quot;</code>.
          </li>
          <li>
            <strong>order_column</strong>: <em>str</em> - Nama kolom untuk mengurutkan data. Contoh:     
            <code>&quot;salary&quot;</code>.
          </li>
          <li>
            <strong>ascending </strong>: <em>bool, optional</em> - Menentukan urutan data, True untuk ascending ( default ), False untuk descending.
          </li>
          <li>
            <strong>filters </strong>: <em>dict, optional</em> - Kondisi filter untuk menentukan baris yang akan diambil. Contoh:   
            <code>{"{'department': 'HR'}"}</code>.
          </li>
          <li>
            <strong>limit</strong>: <em>int, optional</em> - Batas jumlah baris yang akan diambil. Contoh: 10.
          </li>
          <li>
            <strong>offset</strong>: <em>int, optional</em> - Jumlah baris yang akan dilewati sebelum mulai mengambil data. Contoh: 5.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil data dari tabel 'employees', mengurutkan berdasarkan kolom 'salary' secara descending, 
# dengan filter 'department' = 'HR', dan limit 5 baris.
employees = order_by_data('employees', 'salary', ascending=False, filters={'department': 'HR'}, limit=5)
`}
        </pre>
        <p className="mb-4">Variabel <code>Employees </code>akan berisi <code>daftar 5 karyawan </code>dari <code>departemen HR</code>, diurutkan berdasarkan salary secara descending.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      12. Exists Data
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M80-200v-80h400v80H80Zm0-200v-80h200v80H80Zm0-200v-80h200v80H80Zm744 400L670-354q-24 17-52.5 25.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 29-8.5 57.5T726-410l154 154-56 56ZM560-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>exists_data</strong> digunakan untuk memeriksa apakah data yang sesuai dengan filter tertentu ada di dalam tabel. Fungsi ini juga mendukung pengecualian ID tertentu.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def exists_data(table_name, filters, id_column='id', exclude_id=None):
    """
    Checks if data exists in the table based on filters, with an option to exclude a specific ID.

    Parameters:
    table_name (str): The name of the table to check.
    filters (dict): Conditions for the WHERE clause to check which rows exist.
    id_column (str): The column name to check against for the ID (default is 'id').
    exclude_id (int, optional): The ID to exclude from the check.

    Returns:
    bool: True if data exists that matches the filters, False otherwise.
    """
    try:
        where_clause = ' AND '.join([f"{key}=%s" for key in filters.keys()])
        params = list(filters.values())

        # Add exclude_id condition if specified
        if exclude_id is not None:
            where_clause += f' AND {id_column} != %s'
            params.append(exclude_id)  # Append exclude_id to parameters

        sql_query = f"SELECT EXISTS(SELECT 1 FROM {table_name} WHERE {where_clause})"

        with connection.cursor() as cursor:
            cursor.execute(sql_query, params)
            exists = cursor.fetchone()[0]  # Fetch the boolean result

        return exists
    except Exception as e:
        raise Exception(f"Error in exists_data: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang akan dicek. Contoh:  
            <code>&quot;users&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict</em> - Kondisi yang harus dipenuhi untuk memilih baris yang sesuai. Contoh:   
            <code>{"{'username': 'john_doe'}"}</code>.
          </li>
          <li>
            <strong>id_coloumn</strong>: <em>str, optional</em> - Nama kolom ID untuk pengecekan ( default id ).
          </li>
          <li>
            <strong>exclude_id</strong>: <em>int, optional</em> - ID yang harus dikecualikan dari pengecekan.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengecek apakah ada pengguna dengan username 'john_doe', kecuali dengan ID 5
is_exists = exists_data('users', {'username': 'john_doe'}, exclude_id=5)
`}
        </pre>
        <p className="mb-4">Jika data dengan username <code>( john_doe ) </code>ada tetapi bukan dengan ID <code>5</code>, maka is_exists akan bernilai True.</p>
      </section>
      
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      13. Fetch Records With Condition
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M160-240v-480 212-12 280Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H447l-80-80H160v480h280q0 21 3 41t9 39H160Zm531 10 139-138-42-42-97 95-39-39-42 43 81 81Zm29-290q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>fetch_records_with_conditions</strong> digunakan untuk mengambil data dari tabel berdasarkan kondisi kolom NULL, NOT NULL, dan filter tambahan lainnya.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def fetch_records_with_conditions(table_name, null_column=None, not_null_column=None, additional_filters=None):
    """
    Fetch records based on null, not null conditions, and additional filters.

    Parameters:
    table_name (str): The name of the table to query.
    null_column (str, optional): The column to check for NULL values.
    not_null_column (str, optional): The column to check for NOT NULL values.
    additional_filters (dict, optional): Additional conditions (column: value).

    Returns:
    list: A list of records with the specified conditions.
    """
    try:
        with transaction.atomic():
            with connection.cursor() as cursor:
                query = f"SELECT * FROM {table_name} WHERE 1=1"
                params = []

                if null_column:
                    query += f" AND {null_column} IS NULL"
                if not_null_column:
                    query += f" AND {not_null_column} IS NOT NULL"

                if additional_filters:
                    conditions = [f"{column} = %s" for column in additional_filters.keys()]
                    params.extend(additional_filters.values())
                    query += " AND " + " AND ".join(conditions)

                cursor.execute(query, params)
                rows = cursor.fetchall()
                columns = [col[0] for col in cursor.description]  # Get column names
                result = [dict(zip(columns, row)) for row in rows]

                return result
    except Exception as e:
        raise Exception(f"Error fetching records: {str(e)}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang akan di-query. Contoh: 
            <code>&quot;users&quot;</code>.
          </li>
          <li>
            <strong>null_column</strong>: <em>str, optional</em> - Nama kolom untuk mencari nilai NULL.
          </li>
          <li>
            <strong>not_null_column</strong>: <em>str, optional</em> - Nama kolom untuk mencari nilai NOT NULL.
          </li>
          <li>
            <strong>additional_filters</strong>: <em>dict, optional</em> - Filter tambahan dalam format <code>{"{kolom: nilai}"}</code>. Contoh:
            <code>{" {'status': 'active'}"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil pengguna yang kolom 'email' adalah NULL dan 'status' adalah 'active'
users = fetch_records_with_conditions('users', null_column='email', additional_filters={'status': 'active'})
`}
        </pre>
        <p className="mb-4">Pada contoh di atas, <code>users </code>berisi daftar pengguna yang memiliki <code>email NULL dan status ( active ).</code></p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      14. Get a Single Value From a Table
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Zm-80-60 30-98-80-64h98l32-98 32 98h98l-80 64 30 98-80-62-80 62Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>get_value</strong> digunakan untuk mengambil satu nilai dari kolom tertentu dalam tabel berdasarkan filter yang diberikan. Fungsi ini mendukung pengecekan tipe data tertentu, misalnya untuk UUID.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def get_value(table_name, column_name, filters=None, type=None):
    """
    Gets a single value from a specified column in a table.

    Parameters:
    table_name (str): The name of the table to query.
    column_name (str): The column from which to retrieve the value.
    filters (dict, optional): Filters for the WHERE clause to narrow down the result.
    type (str, optional): Specifies a specific type (e.g., "UUID") for special error handling.

    Returns:
    The value from the specified column, or raises an error if the value is not found and type is "UUID".
    """
    try:
        sql_query = f"SELECT {column_name} FROM {table_name}"
        
        # Adding filters (WHERE clause)
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause
        
        sql_query += " LIMIT 1"  # Limit to the first result
        
        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            row = cursor.fetchone()  # Fetch the first row
        
        # If type is UUID and no row is found, raise specific UUID not found error
        if type == "UUID" and row is None:
            raise Exception("UUID tidak ditemukan")
        
        return row[0] if row else None  # Return the value of the specified column
    except Exception as e:
        if type != "UUID":
            raise Exception(f"Error in get_value: {e}")
        else:
            raise Exception("Error in get_value: UUID tidak ditemukan")  # Specific message for UUID not found
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang akan di-query. Contoh: 
            <code>&quot;users&quot;</code>.
          </li>
          <li>
            <strong>column_name</strong>: <em>str</em> - Nama kolom yang ingin diambil nilainya. Contoh:
            <code>&quot;email&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict, optional</em> - Kondisi yang akan digunakan pada klausa WHERE untuk mempersempit hasil. Contoh:
            <code>{" {'username': 'john_doe'}"}</code>.
          </li>
          <li>
            <strong>type</strong>: <em>str, optional</em> - Jenis pengecekan spesifik (misalnya, <code>&quot;UUID&quot;</code>) untuk menangani kesalahan tertentu.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil nilai 'email' dari pengguna dengan username 'john_doe'
email = get_value('users', 'email', filters={'username': 'john_doe'})

# Mengambil UUID pengguna dengan username 'john_doe', jika tidak ditemukan akan menampilkan error
user_uuid = get_value('users', 'uuid_column', filters={'username': 'john_doe'}, type="UUID")
`}
        </pre>
        <p className="mb-4">Fungsi pertama mengambil email dari pengguna yang memiliki username <code>( john_doe ) </code>dan fungsi kedua mencoba untuk mengambil UUID pengguna dengan username ( john_doe ), dan jika tidak ditemukan, akan menghasilkan error khusus terkait UUID.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      15. Save an Uploaded File to a Specific Directory
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="m488-400-65 65 56 56 161-161-161-161-56 56 65 65H320v80h168ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg>
    </span>
  </h2>
  <p className="mb-4">
          Fungsi <strong>save_uploaded_file</strong> digunakan untuk menyimpan file yang diunggah ke direktori tertentu. Fungsi ini akan membuat nama file unik berdasarkan timestamp dan memeriksa apakah file sudah ada untuk menghindari duplikasi.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def save_uploaded_file(file, upload_dir='uploads'):
    """
    Save an uploaded file to a specific directory.

    Parameters:
    file: The file object to save.
    upload_dir (str): The directory to save the uploaded files. Defaults to 'uploads'.

    Returns:
    str: The file path of the saved file.
    """
    # Create the directory if it does not exist
    upload_path = os.path.join(settings.MEDIA_ROOT, upload_dir)
    os.makedirs(upload_path, exist_ok=True)

    # Get the original file name and extension
    original_name = os.path.splitext(file.name)[0]
    extension = os.path.splitext(file.name)[1]

    # Generate a timestamp for the new file name
    timestamp = datetime.now().strftime("%d%m%y_%H%M%S_%f")

    # Create the new file name
    new_file_name = f"{original_name}_{timestamp}{extension}"
    file_path = os.path.join(upload_path, new_file_name)

    # Check if the file already exists, and if so, add a counter to the name
    base, ext = os.path.splitext(new_file_name)
    counter = 1
    while os.path.exists(file_path):
        new_file_name = f"{base}_{counter}{ext}"
        file_path = os.path.join(upload_path, new_file_name)
        counter += 1

    # Save the file
    with open(file_path, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)

    return file_path
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>file</strong>: - Objek file yang diunggah. Ini adalah file yang akan disimpan ke dalam sistem file.
          </li>
          <li>
            <strong>upload_dir</strong>: <em>str, optional</em> - Direktori tempat file akan disimpan. Default adalah ( uploads ). Jika folder ini tidak ada, fungsi akan membuatnya.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengunggah file dan menyimpannya di folder 'documents'
file_path = save_uploaded_file(uploaded_file, upload_dir='documents')
`}
        </pre>
        <p className="mb-4">File yang diunggah akan disimpan dalam direktori documents dan nama file akan diberi timestamp . Jika file dengan nama yang sama sudah ada, angka akan ditambahkan pada nama file untuk memastikan nama unik.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      16. Sum Data from a Column in a Table
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/></svg>
    </span>
  </h2>
        <p className="mb-4">
          Fungsi <strong>sum_data</strong> digunakan untuk menghitung jumlah total dari sebuah kolom dalam tabel, dengan opsi untuk menambahkan filter pada data yang dihitung.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def sum_data(table_name, column_name, filters=None):
    """
    Helper to sum data from a column in a table.

    Parameters:
    table_name (str): The name of the table.
    column_name (str): The name of the column to sum.
    filters (dict, optional): Filters for the WHERE clause.

    Returns:
    float: The sum of the column data that matches the filters, or 0 if no data found.
    """
    try:
        sql_query = f"SELECT SUM({column_name}) FROM {table_name}"

        # Adding filters (WHERE clause)
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause

        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            result = cursor.fetchone()[0]  # Get the sum result

        return result if result is not None else 0  # Return 0 if result is None (no rows)

    except Exception as e:
        raise Exception(f"Error in sum_data: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang akan dihitung jumlah datanya. Contoh:  
            <code>&quot;sales&quot;</code>.
          </li>
          <li>
            <strong>column_name</strong>: <em>str</em> - Nama kolom yang datanya akan dijumlahkan. Contoh: 
            <code>&quot;amount&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict, optional</em> - Filter untuk menerapkan kondisi pada perhitungan jumlah data (WHERE clause). Misalnya, untuk hanya menghitung data yang sesuai dengan kondisi tertentu. Contoh:
            <code>{" {'status': 'completed'}"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Menjumlahkan kolom 'amount' dari tabel 'sales' dengan filter 'status' = 'completed'
total_sales = sum_data('sales', 'amount', filters={'status': 'completed'})
`}
        </pre>
        <p className="mb-4">Fungsi sum_data akan menjumlahkan nilai dalam kolom <code>&quot;amount&quot;</code> pada tabel <code>&quot;sales&quot;</code> yang memiliki filter <code>&quot;status&quot;</code> = <code>&quot;completed&quot;</code>.</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      17. Get the Last Row of Data from a Table
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z"/></svg>
    </span>
  </h2>
        <p className="mb-4">
          Fungsi <strong>last_data</strong> digunakan untuk mengambil baris terakhir dari sebuah tabel berdasarkan urutan yang ditentukan, dengan opsi untuk menambahkan filter dan memilih kolom yang ingin diambil.</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def last_data(table_name, filters=None, order_by_column='id', columns='*'):
    """
    Helper to get the last row of data from a table.

    Parameters:
    table_name (str): The name of the table to read from.
    filters (dict, optional): Filters for the WHERE clause.
    order_by_column (str, optional): The column to order the results by (default is 'id').
    columns (str or list, optional): Columns to select, '*' by default.

    Returns:
    dict or None: A dictionary representing the last row, or None if no data found.
    """
    try:
        if isinstance(columns, list):
            columns = ', '.join(columns)

        sql_query = f"SELECT {columns} FROM {table_name}"

        # Adding filters (WHERE clause)
        where_clause = ''
        if filters:
            where_clause = ' WHERE ' + ' AND '.join([f"{key}=%s" for key in filters.keys()])
            sql_query += where_clause

        # Order by the specified column in descending order
        sql_query += f" ORDER BY {order_by_column} DESC LIMIT 1"

        with connection.cursor() as cursor:
            cursor.execute(sql_query, list(filters.values()) if filters else [])
            columns = [col[0] for col in cursor.description]
            row = cursor.fetchone()  # Get the last row

        return dict(zip(columns, row)) if row else None
    except Exception as e:
        raise Exception(f"Error in last_data: {e}")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li>
            <strong>table_name</strong>: <em>str</em> - Nama tabel yang akan dibaca. Contoh: 
            <code>&quot;orders&quot;</code>.
          </li>
          <li>
            <strong>filters</strong>: <em>dict, optional</em> - untuk kondisi dalam query WHERE. Contoh: 
            <code>{" {'status': 'shipped'}"}</code>.
          </li>
          <li>
            <strong>order_by_column</strong>: <em>str, optional</em> - Kolom untuk mengurutkan hasil (default: <code>&quot;id&quot;</code>). Contoh: 
            <code>&quot;created_at&quot;</code>.
          </li>
          <li>
            <strong>columns</strong>: <em>str or list, optional</em> - yang ingin dipilih, default adalah ( * ) (semua kolom). Contoh: 
            <code>{" ['id', 'name', 'amount']"}</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Mengambil baris terakhir dari tabel 'orders' dengan filter 'status' = 'shipped'
last_order = last_data('orders', filters={'status': 'shipped'})
`}
        </pre>
        <p className="mb-4">Fungsi last_data akan mengambil baris terakhir dari tabel <code>&quot;orders&quot;</code> di mana status adalah <code>&quot;shipped&quot;</code>, diurutkan berdasarkan kolom id dalam urutan menurun.
</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      18. Convert UUID to User ID from JWT
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M400-280h160v-80H400v80Zm0-160h280v-80H400v80ZM280-600h400v-80H280v80Zm200 120ZM80-80v-80h102q-48-23-77.5-68T75-330q0-79 55.5-134.5T265-520v80q-45 0-77.5 32T155-330q0 39 24 69t61 38v-97h80v240H80Zm320-40v-80h360v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H400Z"/></svg>
    </span>
  </h2>
        <p className="mb-4">
          Fungsi <strong>jwt_uuid</strong> converter digunakan untuk mengambil user_id berdasarkan uuid pengguna yang diberikan dalam format JWT.</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def jwt_uuid_conveter(uuid):
    user_id = get_value(
        table_name='sso.users',
        filters={
            'user_uuid': uuid
        },
        column_name="user_id"
    )

    if not user_id:
        return None
    return user_id
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li>
            <strong>uuid</strong>: <em>str</em> - UUID pengguna yang akan dicari dalam tabel <code>&quot;sso.users&quot;</code>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`user_uuid = 'some-uuid-here'
user_id = jwt_uuid_conveter(user_uuid)

if user_id:
    print(f'User ID: {user_id}')
else:
    print('User not found.')
`}
        </pre>
        <p className="mb-4">Fungsi jwt_uuid_conveter akan mencari user_id untuk UUID yang diberikan. Jika ditemukan, ID pengguna akan dicetak, jika tidak, pesan <code>&quot;User not found&quot;</code> akan ditampilkan.
</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      19. Validate Request JSON from Frontend
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400v-560 560Z"/></svg>
    </span>
  </h2>
        <p className="mb-4">
          Fungsi <strong>validate_request</strong> digunakan untuk memvalidasi data JSON yang diterima dari frontend sesuai dengan aturan yang ditentukan. Ini dapat digunakan untuk memastikan data yang dikirim dalam permintaan sesuai dengan kriteria tertentu seperti tipe data, panjang minimum/ maksimum, format email, dll.</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def validate_request(data, rules):
    errors = {}
 
    for field, validations in rules.items():
        field_validations = validations.split('|')
 
        for validation in field_validations:
            # Required rule
            if validation == 'required' and field not in data:
                errors[field] = f"{field} is required."
                continue
 
            # Skip further checks if field is not present and it's not required
            if field not in data:
                continue
 
            value = data[field]
 
            # String rule
            if validation == 'string' and not isinstance(value, str):
                errors[field] = f"{field} must be a string."
 
            # Numeric rule
            if validation == 'numeric' and not isinstance(value, (int, float)):
                errors[field] = f"{field} must be numeric."
 
            # Boolean rule
            if validation == 'boolean' and not isinstance(value, bool):
                errors[field] = f"{field} must be true or false."
 
            # Email rule
            if validation == 'email':
                email_regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
                if not re.match(email_regex, value):
                    errors[field] = f"{field} must be a valid email."
 
            # Date rule
            if validation == 'date':
                try:
                    datetime.strptime(value, '%Y-%m-%d')
                except ValueError:
                    errors[field] = f"{field} must be a valid date (YYYY-MM-DD)."
 
            # Min length for strings or min value for numbers
            if validation.startswith('min:'):
                min_value = int(validation.split(':')[1])
                if isinstance(value, (int, float)) and value < min_value:
                    errors[field] = f"{field} must be at least {min_value}."
                if isinstance(value, str) and len(value) < min_value:
                    errors[field] = f"{field} must be at least {min_value} characters long."
 
            # Max length for strings or max value for numbers
            if validation.startswith('max:'):
                max_value = int(validation.split(':')[1])
                if isinstance(value, (int, float)) and value > max_value:
                    errors[field] = f"{field} must be no more than {max_value}."
                if isinstance(value, str) and len(value) > max_value:
                    errors[field] = f"{field} must be no more than {max_value} characters long."
 
            # In rule (check if value is in a list of allowed values)
            if validation.startswith('in:'):
                allowed_values = validation.split(':')[1].split(',')
                if value not in allowed_values:
                    errors[field] = f"{field} must be one of {', '.join(allowed_values)}."
 
            # Array rule
            if validation == 'array' and not isinstance(value, list):
                errors[field] = f"{field} must be an array."
 
            # Integer rule
            if validation == 'integer' and not isinstance(value, int):
                errors[field] = f"{field} must be an integer."
 
            # Float rule
            if validation == 'float' and not isinstance(value, float):
                errors[field] = f"{field} must be a floating-point number."
 
            # Digits rule (e.g. digits:5 means must be a 5-digit number)
            if validation.startswith('digits:'):
                num_digits = int(validation.split(':')[1])
                if not (isinstance(value, int) and len(str(value)) == num_digits):
                    errors[field] = f"{field} must be a {num_digits}-digit number."
 
            # URL rule
            if validation == 'url':
                url_regex = r'^(https?|ftp)://[^\s/$.?#].[^\s]*$'
                if not re.match(url_regex, value):
                    errors[field] = f"{field} must be a valid URL."
 
            # Starts with rule
            if validation.startswith('starts_with:'):
                prefix = validation.split(':')[1]
                if not value.startswith(prefix):
                    errors[field] = f"{field} must start with {prefix}."
 
            # Ends with rule
            if validation.startswith('ends_with:'):
                suffix = validation.split(':')[1]
                if not value.endswith(suffix):
                    errors[field] = f"{field} must end with {suffix}."
 
            # Unique rule (simulate by checking a list of existing values)
            if validation == 'unique':
                # Normally, you'd check a database for uniqueness
                # Simulate by checking against a list of existing values
                existing_values = ['example1', 'example2']  # Replace with actual database check
                if value in existing_values:
                    errors[field] = f"{field} must be unique."
 
    # Return errors if any are found
    if errors:
        return errors
 
    # No errors, validation passed
    return None
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li>
            <strong>data</strong>: <em>dict</em> - Data yang akan divalidasi, berupa dictionary dengan pasangan key-value untuk setiap field yang ingin divalidasi.
          </li>
          <li>
            <strong>rules</strong>: <em>dict</em> - Aturan-aturan validasi untuk setiap field yang terdapat pada data. Setiap aturan ditulis dalam string yang dipisahkan oleh tanda ( | ) Contohnya:
            (<code>&quot;required|string|min:5&quot;</code>).
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`# Data pengguna yang akan divalidasi
data = {
    'name': 'John Doe',           # Nama pengguna
    'age': 20,                     # Usia pengguna
    'email': 'johndoe@example.com',# Alamat email pengguna
    'is_active': True,             # Status aktif pengguna
    'password': 'secretpass'       # Kata sandi pengguna
}

# Aturan validasi untuk setiap field dalam data
rules = {
    'name': 'required|string|min:3|max:50',    # name harus ada, berupa string, minimal 3 karakter, maksimal 50 karakter
    'age': 'required|numeric|min:18|max:99',   # age harus ada, berupa angka, minimal 18, maksimal 99
    'email': 'required|email',                 # email harus ada dan sesuai format email
    'is_active': 'boolean',                    # is_active harus berupa nilai boolean (True/False)
    'password': 'required|string|min:8'        # password harus ada, berupa string, minimal 8 karakter
}

# Panggilan fungsi validate_request untuk memeriksa data berdasarkan rules
errors = validate_request(data, rules)

# Jika terdapat kesalahan, maka errors akan berisi pesan kesalahan
if errors:
    print("Validasi Gagal:", errors)   # Menampilkan pesan kesalahan jika validasi gagal
else:
    print("Data Valid!")               # Menampilkan pesan bahwa data valid jika tidak ada kesalahan

`}
        </pre>
        <p className="mb-4">fungsi validate_request untuk memvalidasi data pengguna berdasarkan aturan yang telah ditetapkan. Kode ini mencakup definisi data (data) yang akan divalidasi serta aturan (rules) untuk setiap field.
</p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 flex items-center">
    <span className="flex items-center gap-2">
      20. Validate HTTP Method
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed">
      <path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
    </span>
  </h2>
        <p className="mb-4">
          Fungsi <strong>validate_method </strong> memastikan bahwa metode HTTP yang digunakan dalam permintaan sesuai dengan yang diinginkan (misalnya, GET, POST, PUT, dll).</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`def validate_method(request, required_method):
    if request.method != required_method:
        raise ValueError(f"Method not allowed. Please use {required_method} method.")
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Parameters:</h3>
        <ul className="list-disc ml-6 mb-4">
        <li>
            <strong>request</strong>: - Objek yang berisi informasi tentang permintaan (request). Dalam konteks web, objek ini biasanya mencakup informasi seperti metode HTTP (GET, POST, dll.) yang digunakan.
          </li>
          <li>
            <strong>required_method</strong>: - String yang menunjukkan metode HTTP yang diharapkan (misalnya, <code>&quot;GET&quot;</code>, <code>&quot;POST&quot;</code>, dll.).
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Contoh Penggunaan:</h3>
        <pre className="bg-gray-700 text-white p-4 rounded-md overflow-x-scroll overflow-y-hidden">
{`data = {
    'email': 'user@example.com',
    'age': 25,
}

rules = {
    'email': 'required|email',            # 'email' harus ada dan harus dalam format email yang valid
    'age': 'required|numeric|min:18',      # 'age' harus ada, harus angka, dan nilainya minimal 18
}

# Validasi data berdasarkan rules
errors = validate_request(data, rules)

# Cek apakah ada error
if errors:
    print("Validation errors:", errors)    # Tampilkan pesan kesalahan jika ada error
else:
    print("Validation passed!")            # Tampilkan pesan validasi berhasil jika tidak ada error
`}
        </pre>
        <p className="mb-4">Pada contoh di atas, data JSON yang berisi email dan usia akan divalidasi. Jika ada kesalahan validasi, akan dicetak pesan kesalahan. Jika validasi berhasil, pesan <code>&quot;Validation passed!&quot;</code> akan ditampilkan.
</p>
      </section>

    </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
