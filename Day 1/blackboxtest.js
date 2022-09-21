//How to create table in Node js?
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>#{tableData}</table>
</body>
</html>


router.get('/', function(req, res, next) {
    // Read HTML file
    fs.readFile('./files/table.html', 'utf-8', function(err, data) {
        // Redirect to error handler if there's any error
        if(err) return next(err);

        res.writeHead(200, { 'Content-Type': 'text/html' });

        let tableData = {
            param1: 'value1',
            param2: 'value2',
            param3: 'value3'
        };

        // Write tableData object as a HTML table rows and columns
        let tableDataHead = '<tr>';
        let tableDataBody = '<tr>';
        for(let param in tableData) {
            tableDataHead += `<th>${param}</th>`;
            tableDataBody += `<td>${tableData[param]}</td>`;
        }
        tableDataHead += '</tr>';
        tableDataBody += '</tr>';

        // Concatenate tableDataHead and tableDataBody
        let tableDataHTML = tableDataHead + tableDataBody;

        // Replace #{tableData} text with our HTML data
        data = data.replace('#{tableData}', tableDataHTML);

        // Send rendered HTML file to the client
        res.write(data);
        res.end();
    });
});


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body cz-shortcut-listen="true">
    <table>
        <tr>
            <th>param1</th>
            <th>param2</th>
            <th>param3</th>
        </tr>
        <tr>
            <td>value1</td>
            <td>value2</td>
            <td>value3</td>
        </tr>
    </table>
</body>
</html>


