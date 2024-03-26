import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContex";
import { Box } from "@mui/material";

function PurchaseHistoryList(props: any) {
  const { purchaseHistory, handlePurchaseHistory } = useContext(UserContext);

  useEffect(() => {
    handlePurchaseHistory();
  }, []);

  let filteredPurchaseHistory = purchaseHistory;

  if (props.status === "Processing") {
    filteredPurchaseHistory = purchaseHistory.filter(
      (purchase) => purchase.status !== "Delivered"
    );
  } else if (props.status === "Delivered") {
    filteredPurchaseHistory = purchaseHistory.filter(
      (purchase) => purchase.status === "Delivered"
    );
  }

  return (
    <div className="md:max-w-[35rem] md:mx-auto">
      <Box sx={{ border: 1, borderColor: "grey.500", borderRadius: 1 }}>
        {filteredPurchaseHistory.length > 0 ? (
          <List>
            {filteredPurchaseHistory.map((purchase, index, array) => {
              return (
                <div key={purchase.id}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={`Order Id: #${purchase.id}`}
                        secondary={`Order Payment: ${new Date(
                          purchase.createdAt
                        ).toLocaleString()}`}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index !== array.length - 1 && <Divider />}
                </div>
              );
            })}
          </List>
        ) : (
          <p className="text-center py-6 text-slate-400">
            Purchase history not found
          </p>
        )}
      </Box>
    </div>
  );
}

export default PurchaseHistoryList;
