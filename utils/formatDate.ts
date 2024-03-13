export const formatDate = (date: string) => {
    const now = new Date();
    const past = new Date(date);
    const diffInMilliseconds = now.getTime() - past.getTime();

    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    if (diffInSeconds < 60) {
        return `${diffInSeconds}s`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes}m`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours}h`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d`;
}