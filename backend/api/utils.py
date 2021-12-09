
def remove_fields(d, list_of_keys_to_keep):
    return {key: value for key, value in d.items() if key in list_of_keys_to_keep}