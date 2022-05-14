package highradius;
import java.sql.*;
import java.sql.SQLException;
public class JDBCConnection 
{

	public static void main(String[] args)
	{
		String url = "jdbc:mysql://localhost:3306/highradius";
		String username = "root";
		String password = "Prajwal@123";
		
		try {
			Connection connection = DriverManager.getConnection(url,username,password);
			System.out.println("Connected to the database");
			
//   		--------Testing purpuse---------
//			String sql = "SELECT * FROM dataset";
//			Statement statement = connection.createStatement();
//			ResultSet result = statement.executeQuery(sql);
//			int count = 0;
//			while (result.next()) {
//				String date = result.getString("clear_date");
//				count++;
//				System.out.println("Date "+count+":"+date);
//			}
//			connection.close();
		
		} catch (SQLException e) {
			System.out.println("Oops, error!");
			e.printStackTrace();
		}

	}

}
