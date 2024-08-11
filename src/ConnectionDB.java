

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import java.sql.*;

public class ConnectionDB {
    public static Connection getConnection() throws ClassNotFoundException{
    Connection connection = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost/users","root","");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Erreur Connexion");
        }catch (ClassNotFoundException ex) {
            JOptionPane.showMessageDialog(null, "Erreur Connexion");
        }
        return connection;
    }
    
}
