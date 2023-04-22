import pickle
import pandas as pd

# Load the model from the pickle file
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

def predict_fare(input_data):
    """
    Predict the fare amount for a new taxi ride based on the input data.
    """
    input_df = pd.DataFrame(input_data, index=[0])
    prediction = model.predict(input_df)[0]
    return prediction

if __name__ == "__main__":
    input_taxi_data = {
        'passenger_count': 2,
        'trip_distance': 5.21,	
        'rate_code': 1, 	
        'payment_type':	1,
        'extra': 0.50,
        'mta_tax': 0.50,
        'tip_amount':0.00,
        'tolls_amount':	2.00,
        'imp_surcharge': 0.30,	
        'pickup_location_id': 128,
        'dropoff_location_id': 66,
        'hour_in_day':	9,
        'day':	27,
        'day_of_week':	3,
        'month': 9,	
        'trip_duration': 578.0	
    }
    print(predict_fare(input_taxi_data))